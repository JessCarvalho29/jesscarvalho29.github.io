// Description: Recreation of the Simon Game for the Final Project of 24W Internet of Things - Arduino - 202
// Created by Jessica Carvalho, Daniela Oliveira and Yuliya Vaneyeva
// JYD Memory Game 27.02.2024

const int pushButtons = 0;
const int redLED = 6;
const int orangeLED = 7;
const int greenLED = 8;
const int blueLED = 9;
const int piezoBuzzer = 10;

// Red = 1
// Orange = 2
// Green = 3
// Blue = 4

int gameLevel = 0;
int countPressedButtons = 0;
bool playerTurn = false;
bool nextLevelGame = false;
// int redButtonStartsGame = 0;

int arrayComputerGame[50] = {};
int arrayPlayerInput[50] = {};

void setup()
{
  Serial.begin(9600);
  pinMode(redLED, OUTPUT);
  pinMode(orangeLED, OUTPUT);
  pinMode(greenLED, OUTPUT);
  pinMode(blueLED, OUTPUT);
  pinMode(pushButtons, INPUT);
  pinMode(piezoBuzzer, OUTPUT);
  // https://www.programmingelectronics.com/using-random-numbers-with-arduino/
  randomSeed(analogRead(1) + analogRead(2) + analogRead(3) + analogRead(4));
  Serial.println("Press the red button to start the game.");
}

void loop()
{
  mainFunctionGame();
}

// se a pessoa clicar num botao não vai fazer nada
// Se a pessoa errar, mostrar Game over e recomeçar
// mensagens a cada etapa no LCD

void mainFunctionGame()
{
  int redButtonStartsGame = getPressedButton();
  if (redButtonStartsGame == 1)
  {
    nextLevelGame = true;
  }
  delay(1000);

  if (nextLevelGame == true)
  {

    // Generating randomly a number from 1 to 4
    int randomNumber = random(1, 5);

    // Including the new random number in the arrayComputerGame
    arrayComputerGame[gameLevel] = randomNumber;
    //}

    // Displaying all the lights and sounds in the arrayComputerGame
    for (int i = 0; i <= gameLevel; i++)
    {
      displayLightSound(arrayComputerGame[i]);
      Serial.println("Computer ");
      Serial.println(arrayComputerGame[i]);
      delay(300);
    }

    playerTurn = true;

    gameLevel = gameLevel + 1;

    while (playerTurn == true)
    {

      if (countPressedButtons == gameLevel) //(gameLevel + 1)
      {
        resultGame();
        if (nextLevelGame == false)
        {
          endGame();
          break;
        }
        Serial.println("buttonPressed");
        Serial.println(countPressedButtons);
        countPressedButtons = 0;
        cleanPlayerMove();
        playerTurn = false;
        Serial.println("End player turn");
        Serial.println(gameLevel);
        Serial.println("Fim do level");
        break;
      }

      int pressedButton = getPressedButton();
      if (pressedButton > 0)
      {
        playStep(pressedButton, countPressedButtons);
        Serial.println("Player");
        Serial.println(pressedButton);
        countPressedButtons++;
      }
    }

    // gameLevel = gameLevel + 1;

    // Serial.println(gameLevel);
    // Serial.println("Fim do level");

    delay(1000);
  }
}

void endGame()
{
  cleanPlayerMove();
  cleanComputerMove();
  countPressedButtons = 0;
  playerTurn = false;
  gameLevel = 0;
  nextLevelGame = false;
  // redButtonStartsGame = 0;
  Serial.println("Game Over");
  delay(500);
  Serial.println("Press the red button to start the game.");
}

void resultGame()
{
  for (int i = 0; i < gameLevel; i++) //<= gameLevel
  {
    if (arrayComputerGame[i] == arrayPlayerInput[i])
    {
      nextLevelGame = true;
    }
    else
    {
      nextLevelGame = false;
      break;
    }
  }
}

void cleanPlayerMove()
{
  for (int i = 0; i < gameLevel; i++) //<= gameLevel
  {
    arrayPlayerInput[i] = 0;
  }
}

void cleanComputerMove()
{
  for (int i = 0; i < gameLevel; i++) //<= gameLevel
  {
    arrayComputerGame[i] = 0;
  }
}

int getPressedButton()
{

  int buttonInputPlayer = analogRead(pushButtons);
  delay(100);

  /*
  Buttons value:
  Red = 511
  Orange = 341
  Green = 256
  Blue = 205
  */

  if (buttonInputPlayer > 500 && buttonInputPlayer < 520)
  {
    return 1;
  }
  else if (buttonInputPlayer > 320 && buttonInputPlayer < 360)
  {
    return 2;
  }
  else if (buttonInputPlayer > 230 && buttonInputPlayer < 270)
  {
    return 3;
  }
  else if (buttonInputPlayer > 190 && buttonInputPlayer < 220)
  {
    return 4;
  }
  else
  {
    return 0;
  }
}

void playStep(int pressedButton, int countPressedButtons)
{
  arrayPlayerInput[countPressedButtons] = pressedButton;
  displayLightSound(pressedButton);
}

void displayLightSound(int playNumber)
{

  int delayInMilliseconds = 1000;

  if (playNumber == 1)
  {
    digitalWrite(redLED, HIGH);
    tone(10, 164.81, 300);
    delay(delayInMilliseconds);
    digitalWrite(redLED, LOW);
  }
  else if (playNumber == 2)
  {
    digitalWrite(orangeLED, HIGH);
    tone(10, 220.00, 300);
    delay(delayInMilliseconds);
    digitalWrite(orangeLED, LOW);
  }
  else if (playNumber == 3)
  {
    digitalWrite(greenLED, HIGH);
    tone(10, 138.59, 300);
    delay(delayInMilliseconds);
    digitalWrite(greenLED, LOW);
  }
  else if (playNumber == 4)
  {
    digitalWrite(blueLED, HIGH);
    tone(10, 329.63, 300);
    delay(delayInMilliseconds);
    digitalWrite(blueLED, LOW);
  }
}