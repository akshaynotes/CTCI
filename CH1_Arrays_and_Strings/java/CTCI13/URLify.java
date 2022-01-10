package CTCI13;

/**
 * Created by Akshay on 30-12-2021.
 */

/**
 * URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
 * has sufficient space at the end to hold the additional characters, and that you are given the "true"
 * length of the string. (Note: If implementing in Java, please use a character array so that you can
 * perform this operation in place.)
 */
public class URLify {
    public static void main(String[] args) {
        String str = "Mr John Smith     ";
        //op -> "Mr%20John%20Smith"
        System.out.println(urlify(str, 13));
    }

    private static String urlify(String str, int truelength) {
        char string[] = str.toCharArray();
        //calculate last index i.e after addition of %20 at what length last char would be....for that count no of spaces
        int space = 0;
        for (int i = 0; i < truelength; i++) {
            if (string[i] == ' ') space++;
        }

        int lastIndex = (truelength + space * 2) - 1;
        for (int i = truelength-1; i >= 0; i--) {
            if (string[i] != ' ') {
                string[lastIndex--] = string[i];
            } else if (string[i] == ' ') {
                string[lastIndex--] = '0';
                string[lastIndex--] = '2';
                string[lastIndex--] = '%';
            }
        }
        return new String(string);
    }
}
