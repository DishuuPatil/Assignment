import java.util.*;

public class checkPangram {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        sc.close();

        input = input.toLowerCase();

        boolean[] mark = new boolean[26];
        int index, len = input.length();

        for (int i = 0; i < len; i++) {
            if ('a' <= input.charAt(i) && input.charAt(i) <= 'z') {
                index = input.charAt(i) - 'a';
            } else {
                continue;
            }

            mark[index] = true;
        }

        boolean result = true;
        for (int i = 0; i < 26; i++) {
            if (!mark[i]) {
                result = false;
                break;
            }
        }

        if (result) {
            System.out.println("The input string is a Pangram.");
        } else {
            System.out.println("The input string is not a Pangram.");
        }

    }
}
