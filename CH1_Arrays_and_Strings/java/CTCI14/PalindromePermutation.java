package CTCI14;

/**
 * Created by Akshay on 30-12-2021.
 */

/**
* Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations: "taco cat", "atco eta", etc.)
* */
public class PalindromePermutation {
    public static void main(String[] args) {
        String string = "Tact Coa";

        System.out.println(isPalindromePermutation(string));
    }

    private static boolean isPalindromePermutation(String string) {
        string = string.replaceAll(" ","");
        string = string.toLowerCase();
        //even length...every char should have even count
        //odd length....every char should have even count except one

        int count[] = new int[26];
        for(int i=0; i<string.length(); i++){
            count[string.charAt(i) - 'a']++;
        }
        //check if odd even
        boolean isOddLengthString = string.length()%2 != 0;
        boolean flagWhenOdd = false;
        for(int i=0; i<count.length; i++){
            if(!isOddLengthString && !isEven(count[i]))
                return false;
            if(flagWhenOdd && !isEven(count[i]) && isOddLengthString)
                return false;
            else if(!isEven(count[i]) && isOddLengthString){
                flagWhenOdd = true;
            }
        }
        return true;
    }

    private static boolean isEven(int num){
        return num % 2 == 0;
    }
}
