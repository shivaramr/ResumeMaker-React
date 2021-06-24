function resume(data) {
  var expArr = [];

  for (let i = 0; i < data.experiences.length; i++) {
    expArr.push({
      text: `${data.experiences[i].companyName} \n ${data.experiences[i].designation} \n ${data.experiences[i].note} \n \n`,
    });
  }

  var dd = {
    content: [
      {
        stack: [data.heading.fullName.toUpperCase()],
        style: "header",
      },
      {
        text: `Phone: ${data.heading.phoneNumber} \n Email: ${data.heading.email} \n Address: ${data.heading.address}\n`,
        style: "subheader",
      },
      {
        stack: [
          {
            text: ["Resume Objective"],
            style: "subHeadings",
          },
          data.pInfo.resumeObjective,
        ],
      },
      {
        stack: [
          {
            text: ["Experiences"],
            style: "subHeadings",
          },
          // do compnayName, designation note, 1 or 3 depends
          ...expArr
        ],
      },
      {
        text: ["Education"],
        style: "subHeadings",
      },
      {
        text: [`${data.pInfo.graduation}`],
        color: '#003fb3'
      },{
        text: [`${data.pInfo.gNote} \n`],
      },
      {
        text: [`${data.pInfo.HSC}`],
        color: '#003fb3'
      },{
        text: [`${data.pInfo.hscNote} \n`],
      },
      {
        ul: [
          {
            ul: [
              {
                columns: [
                  {
                    stack: [
                      {
                        text: "Domain Knowledge",
                        color: "#003fb3",
                      },
                      {
                        ol: [...data.pInfo.domainKnowledge.split(" ")],
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        text: "Languages",
                        color: "#003fb3",
                      },
                      {
                        ol: [...data.pInfo.languages.split(" ")],
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        text: "Hobbies",
                        color: "#003fb3",
                      },
                      {
                        ol: [...data.pInfo.hobbies.split(" ")],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        stack: [
          {
            text: ["References"],
            style: "subHeadings",
          },
          {
            text: `Reference 1: ${data.refer.ref1}, ${data.refer.details1}`,
          },
          {
            text: `Reference 2: ${data.refer.ref2}, ${data.refer.details2}`,
          },
        ],
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        color: "#003fb3",
        alignment: "center",
        margin: [0, 0, 0, 0],
      },
      subheader: {
        fontSize: 14,
        alignment: "center",
        margin: [0, 0, 0, 40],
      },
      subHeadings: {
        fontSize: 15,
        bold: true,
        color: "#003fb3",
        margin: [0, 10, 0, 10],
      },
    },
  };
  return dd;
}

export default resume;
