var data = [
    {
        'name': '데이터베이스',
        'grade': 'A',
        'credit': 3,
        'major': false
    },
    {
        'name': '교양영어',
        'grade': 'B+',
        'credit': 2,
        'major': true
    },
    {
        'name': '철학',
        'grade': 'B+',
        'credit': 1,
        'major': false
    }
];
//영어학점을 숫자로 변환
const gradeScoreObject = {
    'A+':4.5,
    'A':4,
    'B+':3.5,
    'B':3,
    'C+':2.5,
    'C':2,
    'D+':1.5,
    'D':1,
    'F':0
}

//학점평균을 소수 두번째 자리까지 구하는 함수
function calcGradeAverage(totalGrade, totalCredit) {
    return (totalGrade / totalCredit).toFixed(2)
}

//학점평균을 인자로 입력받아 만점이4.0일때의 학점평균(소수 두번째 자리까지)으로 바꾸어주는 함수
function convertGradeAverage(gradeAverage) {
    return (gradeAverage * 4.0 / 4.5).toFixed(2)
}
//출력해주는 함수
function printGrade(gradeAverage, majorGradeAverage, credit, majorCredit) {
    console.log('4.5기준 총평점 : ' + gradeAverage + '(4.0기준은 ' + convertGradeAverage(gradeAverage) + ')');
    console.log('4.5기준 전공평점 : ' + majorGradeAverage + '(4.0기준은 ' + convertGradeAverage(majorGradeAverage) + ')');
    console.log('이수학점 : ' + credit);
    console.log('전공이수학점 : ' + majorCredit);
}
//Data를 반영해 학점평균을 구하기위한 값들과 학점을 구하는 함수
function showGrade(gradeData) {
    let totalGrade = 0
    let totalMajorGrade = 0
    let totalCredit = 0
    let totalMajorCredit = 0
    
    gradeData.forEach(classObject => {
        for(classValue in classObject) {
            const classCredit = classObject['credit']
            const classGrade = gradeScoreObject[classObject['grade']] * classObject['credit']
            if(classValue === 'grade') {
                totalGrade = totalGrade + classGrade
            } else if (classValue === 'credit') {
                totalCredit = totalCredit + classCredit
            } else if (classValue === 'major' && classObject['major']) {
                totalMajorCredit = totalMajorCredit + classCredit
                totalMajorGrade = totalMajorGrade + classGrade
            }
        }
    });
    
    const gradeAverage = calcGradeAverage(totalGrade, totalCredit)
    const majorGradeAverage = calcGradeAverage(totalMajorGrade, totalMajorCredit)
    printGrade(gradeAverage, majorGradeAverage, totalCredit, totalMajorCredit);
}

showGrade(data);