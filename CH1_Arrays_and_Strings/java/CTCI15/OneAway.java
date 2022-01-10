package CTCI15;

/**
 * Created by Akshay on 31-12-2021.
 */

/**
 * There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 * EXAMPLE
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
* */
public class OneAway {
    public static void main(String[] args) {
        String s = "pale";
        String t = "bake";

        System.out.println(isOneOpAway(s, t));
    }

    private static boolean isOneOpAway(String s, String t) {
        int slength = s.length();
        int tlength = t.length();

        if (Math.abs(slength - tlength) >= 2)
            return false;

        if (slength > tlength) {
            //need to remove a char from s
            boolean isCharRemoved = false;
            int i, j;
            i = j = 0;
            for (; j < tlength; i++) {
                if (s.charAt(i) != t.charAt(j)) {
                    if (!isCharRemoved) {
                        isCharRemoved = true;
                    } else {
                        return false;
                    }
                }else{
                    j++;
                }
            }
            return true;
        }
        return false;
    }
}
