import java.util.*;

public class SubString {
	
	public static void main(String[] args) {
		SubString str = new SubString(); //class object
		Scanner sc = new Scanner(System.in); //scanner object
		System.out.println("Enter a sentence : ");
		String sentence = sc.nextLine();//intakes string user input.
		System.out.println("Enter a Letter : ");
		char letter = sc.nextLine().charAt(0); //intakes char user input.
		
		//displays end result.
		System.out.println("Sentence : "+ sentence);
		System.out.println("Letter 	 : "+ letter);
		System.out.println("Result   : "+ str.subStr(letter, sentence));
			
	}
	
//---------------------------------------------------------------------------------------->
	
	//checks whether the string contains the char input.
	public boolean contains(String str, char chr ) {
	    for(int i = 0; i < str.length(); i++)
	        if(str.charAt(i) == chr)
	            return true;//returns true if present.
	    return false;//returns false if it isn't present.
	}

//---------------------------------------------------------------------------------------->
	//returns subString if it is invoked.
	public String subStr(char letter, String sentence) {
		//create a new variable to push the sub-string from the user input;
		String subString = " ";
		SubString str = new SubString();//new class
		if(str.contains(sentence, letter)==true) {
		int curInd = sentence.indexOf(letter);//saving the index value of char.
		subString = sentence.substring(++curInd).trim();
		}else {
			subString = "The letter does not exist in the sentence";
		}
		return subString;
	}
}
