import java.util.*;

public class RomanNumber {

    public static int romanToInt(String str) {
        if (str == null || str.length() == 0) {
            return 0;
        }

        Map<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int result = 0;
        int previousVal = 0;

        for (int i = str.length() - 1; i >= 0; i--) {
            int temp = map.get(str.charAt(i));
            if (temp < previousVal) {
                result -= temp;
            } else {
                result += temp;
                previousVal = temp;
            }
        }

        return result;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();
        System.out.println(romanToInt(str));

        sc.close();

    }
}