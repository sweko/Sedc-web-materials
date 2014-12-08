var th = ['', 'thousand', 'million', 'billion', 'trillion'];
var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var iljadi = ['', 'илјади', 'милиони', 'билиони', 'трилиони'];
var arapski = ['нула', 'еден', 'два', 'три', 'четири', 'пет', 'шест', 'седум', 'осум', 'девет'];
var teenage = ['десет', 'единаесет', 'дванаесет', 'тринаесет', 'четиринаесет', 'петнаесет', 'шеснаесет', 'седуманаесет', 'осумнаесет', 'деветнаесет'];
var desetki = ['дваесет', 'триесет', 'четириесет', 'пеесет', 'шеесет', 'седумдесет', 'осумдесет', 'деведесет'];

function numberConverter(){
        var s = document.getElementById("entry").value;
        if (s != parseInt(s) || s < 1) {
                alert('Invalid value, no words, decimals or negative numbers allowed');
                return;
        }
        alert(numberToWords(s));        
}


function numberToWords(s) {
        s = s.toString();
        var x = s.indexOf('.');
        if (x == -1)
                x = s.length;
        if (x > 12) {
                return 'The number is too big, it needs to be 12 or less';
        }
        
        var n = s.split('');
        var str = '';
        var sk = 0;
        for (var i = 0; i < x; i++) {
                if ((x - i) % 3 == 2) {
                        if (n[i] == '1') {
                                str += tn[Number(n[i + 1])] + ' '; i++; sk = 1;
                        }
                        else if (n[i] != 0) {
                                str += tw[n[i] - 2] + ' ';
                                sk = 1;
                        }
                }
                else if (n[i] != 0) {
                        str += dg[n[i]] + ' ';
                        if ((x - i) % 3 == 0)
                                str += 'hundred ';
                        sk = 1;
                }
                if ((x - i) % 3 == 1) {
                        if (sk) str += th[(x - i - 1) / 3] + ' ';
                        sk = 0;
                }
        }
        return str;
}

function numberConverterMK() {
        var s = document.getElementById("entry2").value;
        if (s != parseInt(s) || s < 1) {
                alert('Погрешен внес, внесовте текст, децимален број или негативен број');
                return;
        }
        var x = s.indexOf('.');
        if (x == -1)
                x = s.length;
        if (x > 12) {
                alert('Бројот е преголем, треба да содржи 12 или помалку цифри');
                return;
        }
        var n = s.split('');
        var str = '';
        var sk = 0;
        for (var i = 0; i < x; i++) {
                if ((x - i) % 3 == 2) {
                        if (n[i] == '1') {
                                str += teenage[Number(n[i + 1])] + ' '; i++; sk = 1;
                        }
                        else if (n[i] != 0) {
                                str += desetki[n[i] - 2] + ' и ';
                                sk = 1;
                        }
                }
                else if (n[i] != 0) {
                        str += arapski[n[i]] + ' ';
                        if ((x - i) % 3 == 0)
                                str += 'сто ';
                        sk = 1;
                }
                if ((x - i) % 3 == 1) {
                        if (sk) str += iljadi[(x - i - 1) / 3] + ' ';
                        sk = 0;
                }
        }
        alert(str);
}
