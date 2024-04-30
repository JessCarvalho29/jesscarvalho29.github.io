public class GameLogic {

    String [] scienceQuestions = {"What is the chemical symbol for water?","What is the center of an atom called?","What is the process by which plants make their food called?"};
    String [] scienceOptionA = {"a) WH", "a) Nucleus", "a) Decomposition"};
    String [] scienceOptionB = {"b) WA", "b) Electron Cloud", "b) Photosynthesis"};
    String [] scienceOptionC = {"c) H20", "c) Proton Core", "c) Transpiration"};
    String [] scienceOptionD = {"d) HO2", "d) Nucleolus", "d) Respiration"};
    char [] scienceCorrectAnswers = {'C', 'A', 'B'};

    String [] historyQuestions = {"Who was the first President of the United States?","In which year did World War II end?","Who is known as the father of modern physics?"};
    String [] historyOptionA = {"a) Abraham Lincoln", "a) 1943", "a) Albert Einstein"};
    String [] historyOptionB = {"b) Thomas Jefferson", "b) 1945", "b) Isaac Newton"};
    String [] historyOptionC = {"c) John Adams", "c) 1944", "c) Galileo Galilei"};
    String [] historyOptionD = {"d) George Washington", "d) 1946", "d) Nikola Tesla"};
    char [] historyCorrectAnswers = {'D', 'B', 'A'};

    String [] geographyQuestions = {"What is the capital of France?","Which is the longest river in the world?","What is the largest continent by land area?"};
    String [] geographyOptionA = {"a) Berlin", "a) Amazon River", "a) North America"};
    String [] geographyOptionB = {"b) Paris", "b) Mississippi River", "b) Europe"};
    String [] geographyOptionC = {"c) Madrid", "c) Nile River", "c) Africa"};
    String [] geographyOptionD = {"d) Rome", "d) Yangtze River", "d) Asia"};
    char [] geographyCorrectAnswers = {'B', 'C', 'D'};

    String [] literatureQuestions = {"Who wrote \"To Kill a Mockingbird\"?","Which Shakespeare play features the character Hamlet?","Who wrote the famous novel \"1984\"?"};
    String [] literatureOptionA = {"a) Ernest Hemingway", "a) Macbeth", "a) Aldous Huxley"};
    String [] literatureOptionB = {"b) Harper Lee", "b) Romeo and Juliet", "b) George Orwell"};
    String [] literatureOptionC = {"c) Mark Twain", "c) Othello", "c) Ray Bradbury"};
    String [] literatureOptionD = {"d) F. Scott Fitzgerald", "d) Hamlet", "d) J.D. Salinger"};
    char [] literatureCorrectAnswers = {'B', 'D', 'B'};


    String [] sportsQuestions = {"In which sport do players use a shuttlecock?","What is the highest score achievable in a single turn in bowling?","Which country won the FIFA World Cup in 2018?"};
    String [] sportsOptionA = {"a) Tennis", "a) 100", "a) France"};
    String [] sportsOptionB = {"b) Squash", "b) 200", "b) Brazil"};
    String [] sportsOptionC = {"c) Table Tennis", "c) 300", "c) Germany"};
    String [] sportsOptionD = {"d) Badminton", "d) 400", "d) Argentina"};
    char [] sportsCorrectAnswers = {'D', 'C', 'A'};

    int gameCategory = 0;
    int currentQuestion = 0;
    char correctAnswer;
    char userAnswer;
    int gameScore;

    public GameLogic(int gameCategory) {

        this.gameCategory = gameCategory;
    }

    public void setGameCategory(int categoryChose){

        this.gameCategory = categoryChose;
    }

    public int getGameCategory(){

        return gameCategory;
    }

    public void displayQuestions(){
        if(gameCategory == 1){
            System.out.println(scienceQuestions[currentQuestion]);
            System.out.println(scienceOptionA[currentQuestion]);
            System.out.println(scienceOptionB[currentQuestion]);
            System.out.println(scienceOptionC[currentQuestion]);
            System.out.println(scienceOptionD[currentQuestion]);
        } else if (gameCategory == 2){
            System.out.println(historyQuestions[currentQuestion]);
            System.out.println(historyOptionA[currentQuestion]);
            System.out.println(historyOptionB[currentQuestion]);
            System.out.println(historyOptionC[currentQuestion]);
            System.out.println(historyOptionD[currentQuestion]);
        } else if (gameCategory == 3){
            System.out.println(geographyQuestions[currentQuestion]);
            System.out.println(geographyOptionA[currentQuestion]);
            System.out.println(geographyOptionB[currentQuestion]);
            System.out.println(geographyOptionC[currentQuestion]);
            System.out.println(geographyOptionD[currentQuestion]);
        } else if (gameCategory == 4){
            System.out.println(literatureQuestions[currentQuestion]);
            System.out.println(literatureOptionA[currentQuestion]);
            System.out.println(literatureOptionB[currentQuestion]);
            System.out.println(literatureOptionC[currentQuestion]);
            System.out.println(literatureOptionD[currentQuestion]);
        } else if (gameCategory == 5){
            System.out.println(sportsQuestions[currentQuestion]);
            System.out.println(sportsOptionA[currentQuestion]);
            System.out.println(sportsOptionB[currentQuestion]);
            System.out.println(sportsOptionC[currentQuestion]);
            System.out.println(sportsOptionD[currentQuestion]);
        }
    }

    public void validateAnswer(char answer){

        String category = "";

        switch (answer){
            case 'A':
            case 'a':
                userAnswer = 'A';
                break;

            case 'B':
            case 'b':
                userAnswer = 'B';
                break;

            case 'C':
            case 'c':
                userAnswer = 'C';
                break;

            case 'D':
            case 'd':
                userAnswer = 'D';
                break;
        }

        if(gameCategory == 1){
            correctAnswer = scienceCorrectAnswers[currentQuestion];
            category = "Science";
        } else if (gameCategory == 2) {
            correctAnswer = historyCorrectAnswers[currentQuestion];
            category = "History";
        } else if (gameCategory == 3) {
            correctAnswer = geographyCorrectAnswers[currentQuestion];
            category = "Geography";
        } else if (gameCategory == 4) {
            correctAnswer = literatureCorrectAnswers[currentQuestion];
            category = "Literature";
        } else if (gameCategory == 5) {
            correctAnswer = sportsCorrectAnswers[currentQuestion];
            category = "Sports";
        }

        if (userAnswer == correctAnswer) {
            System.out.println("Correct Answer!");
            gameScore = gameScore + 10;
            System.out.println("Your score is " + gameScore);
        } else {
            System.out.println("Wrong Answer!");
            System.out.println("The correct answer is: " + correctAnswer);
        }

        if (currentQuestion == 2) {
            currentQuestion = 0;

            if(gameScore == 30){
                System.out.println("You rock at " + category + "!");
            } else {
                System.out.println("Try again to have total score");
            }

        } else {
            currentQuestion++;
        }
    }
}

