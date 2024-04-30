import java.util.Scanner;

public class PlayGame {

    public static void main(String[] args){

        System.out.println("Welcome to Trivia Game!");
        System.out.printf("Let's test your knowledge?%nChoose one category to answer 3 questions about it.%nFor each correct answer you get 10 points in the chosen category.%n");
        runGame();
    }

    public static void runGame() {
        System.out.println("The categories are:");
        System.out.println("1 - Science");
        System.out.println("2 - History");
        System.out.println("3 - Geography");
        System.out.println("4 - Literature");
        System.out.println("5 - Sports");

        Scanner userInputCategory = new Scanner(System.in);
        System.out.println("Choose a category to start (1 to 5)");
        int categoryChoseByUser = userInputCategory.nextInt();

        if(categoryChoseByUser != 1 && categoryChoseByUser != 2
                && categoryChoseByUser != 3 && categoryChoseByUser != 4 && categoryChoseByUser !=5){
            Scanner userNewInputCategory = new Scanner(System.in);
            System.out.println("Please, insert a valid category from 1 to 5");
            categoryChoseByUser = userNewInputCategory.nextInt();
        }

        GameLogic playingGame = new GameLogic(categoryChoseByUser);

        for (int i = 0; i < 3; i++) {
            playingGame.displayQuestions();
            Scanner userInputAnswer = new Scanner(System.in);
            System.out.println("Type your answer: ");
            char answerChosenByUser = userInputAnswer.next().charAt(0);

            if(answerChosenByUser != 'a' && answerChosenByUser != 'b' && answerChosenByUser != 'c' && answerChosenByUser != 'd' &&
                answerChosenByUser != 'A' && answerChosenByUser != 'B' && answerChosenByUser != 'C' && answerChosenByUser != 'D'){
                Scanner userNewInputAnswer = new Scanner(System.in);
                System.out.println("Please, insert a valid answer");
                answerChosenByUser = userNewInputAnswer.next().charAt(0);
            }
            playingGame.validateAnswer(answerChosenByUser);
        }

        Scanner userInputPlayAgain = new Scanner(System.in);
        System.out.println("Do you want to choose another category? Yes or No?");
        String playAgainChoseByUser = userInputPlayAgain.nextLine().toLowerCase();

        if (playAgainChoseByUser.equals("y")
                || playAgainChoseByUser.equals("yes")) {
            runGame();
        } else {
            System.out.println("Thank you for playing!");
        }
    }
}



