using api.Dtos.Register;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers;

[Route("api/account")]
[ApiController]

public class AccountController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    
    private readonly SignInManager<AppUser> _signInManager;

    private readonly ITokenService _tokenService;
    
    public AccountController(UserManager<AppUser>  userManager, ITokenService tokenService, SignInManager<AppUser> signInManager)
    {
        _userManager = userManager;
        _tokenService = tokenService;
        _signInManager =  signInManager;
    }
    
    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequestDto loginRequestDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == loginRequestDto.UserName);

        if (user == null) 
            return Unauthorized("Invalid username");
        
        var result = await _signInManager.CheckPasswordSignInAsync(user, loginRequestDto.Password, false);
        
        if(!result.Succeeded)
            return Unauthorized("Username not found and/or password is incorrect");

        return Ok(new NewUserDto
            {
                UserName = user.UserName,
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            }
        );
    }
    

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequestDto registerRequestDto)
    {
        try
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var appUser = new AppUser
            {
                UserName = registerRequestDto.Username,
                Email = registerRequestDto.Email
            };
            
            var createUser = await _userManager.CreateAsync(appUser, registerRequestDto.Password);

            if (createUser.Succeeded)
            {
                var roleResult = await _userManager.AddToRoleAsync(appUser, "User");
                
                if (roleResult.Succeeded)
                {
                    return Ok(new NewUserDto
                    {
                        UserName = appUser.UserName,
                        Email = appUser.Email,
                        Token = _tokenService.CreateToken(appUser)
                    }); 
                }

                return StatusCode(500, roleResult.Errors);
            }

            return StatusCode(500, createUser.Errors);

        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }
    
}