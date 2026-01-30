/**
 *  Import action creator constants & dependencies
 */
import {userConstants} from '../constants';
import {API_URLS} from '../../configs/url';
import {Utils} from '@Utils';

export const beginLogin = (data: any) => ({
  type: userConstants.LOGIN,
  payload: {
    request: {
      url: API_URLS.LOGIN,
      method: 'post',
      data,
    },
  },
});

export function Login_user(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(beginLogin(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const register_api = (data: any) => ({
  type: userConstants.register,
  payload: {
    request: {
      url: API_URLS.register,
      method: 'post',
      data,
    },
  },
});

export function register(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(register_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getAllModules_api = () => ({
  type: userConstants.getAllModules,
  payload: {
    request: {
      url: API_URLS.getAllModules,
    },
  },
});

export function getAllModules() {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getAllModules_api());
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getUserModules_api = () => ({
  type: userConstants.getUserModules,
  payload: {
    request: {
      url: API_URLS.getUserModules,
    },
  },
});

export function getUserModules() {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getUserModules_api());
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getModuleDetail_api = (data: any) => ({
  type: userConstants.getModuleDetail,
  payload: {
    request: {
      url: API_URLS.getModuleDetail,
      data,
    },
  },
});

export function getModuleDetail(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getModuleDetail_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getTopics_api = (data: any) => ({
  type: userConstants.getTopics,
  payload: {
    request: {
      url: API_URLS.getTopics,
      data,
    },
  },
});

export function getTopics(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getTopics_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getTopicLesson_api = (data: any) => ({
  type: userConstants.getTopicLesson,
  payload: {
    request: {
      url: API_URLS.getTopicLesson,
      data,
    },
  },
});

export function getTopicLesson(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getTopicLesson_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getOtherLesson_api = (data: any) => ({
  type: userConstants.getOtherLesson,
  payload: {
    request: {
      url: API_URLS.getOtherLesson,
      data,
    },
  },
});

export function getOtherLesson(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getOtherLesson_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const lessonDone_api = (data: any) => ({
  type: userConstants.lessonDone,
  payload: {
    request: {
      url: API_URLS.lessonDone,
      method: 'post',
      data,
    },
  },
});

export function lessonDone(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(lessonDone_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const userTopicQuestions_api = (data: any) => ({
  type: userConstants.userTopicQuestions,
  payload: {
    request: {
      url: API_URLS.userTopicQuestions,
      data,
    },
  },
});

export function userTopicQuestions(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(userTopicQuestions_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const startTopicTest_api = (data: any) => ({
  type: userConstants.startTopicTest,
  payload: {
    request: {
      url: API_URLS.startTopicTest,
      data,
    },
  },
});

export function startTopicTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(startTopicTest_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const topicNextQuestion_api = (data: any) => ({
  type: userConstants.topicNextQuestion,
  payload: {
    request: {
      url: API_URLS.topicNextQuestion,
      method: 'post',
      data,
    },
  },
});

export function topicNextQuestion(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(topicNextQuestion_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const topicPrevQuestion_api = (data: any) => ({
  type: userConstants.topicPrevQuestion,
  payload: {
    request: {
      url: API_URLS.topicPrevQuestion,
      method: 'post',
      data,
    },
  },
});

export function topicPrevQuestion(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(topicPrevQuestion_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const saveMyQuestion_api = (data: any) => ({
  type: userConstants.saveMyQuestion,
  payload: {
    request: {
      url: API_URLS.saveMyQuestion,
      method: 'post',
      data,
    },
  },
});

export function saveMyQuestion(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(saveMyQuestion_api(params));
      console.log('params312321', response);

      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const questionNote_api = (data: any) => ({
  type: userConstants.questionNote,
  payload: {
    request: {
      url: API_URLS.questionNote,
      method: 'post',
      data,
    },
  },
});

export function questionNote(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(questionNote_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const questionHelpText_api = (data: any) => ({
  type: userConstants.questionHelpText,
  payload: {
    request: {
      url: API_URLS.questionHelpText,
      data,
    },
  },
});

export function questionHelpText(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(questionHelpText_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getUserModuleHistory_api = () => ({
  type: userConstants.getUserModuleHistory,
  payload: {
    request: {
      url: API_URLS.getUserModuleHistory,
    },
  },
});

export function getUserModuleHistory() {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getUserModuleHistory_api());
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const changeUserPassword_api = (data: any) => ({
  type: userConstants.changeUserPassword,
  payload: {
    request: {
      url: API_URLS.changeUserPassword,
      method: 'post',
      data,
    },
  },
});

export function changeUserPassword(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(changeUserPassword_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const updateUserProfile_api = (data: any) => {
  const formData = new FormData();

  // signature image (file)
  formData.append('name', data?.name);
  formData.append('phone', data?.phone);

  data?.user_thumb &&
    formData.append('profile_image', {
      uri: data?.user_thumb,
      name: 'image.jpg',
      type: 'image/jpeg',
    } as any);

  return {
    type: userConstants.updateUserProfile,
    payload: {
      request: {
        url: API_URLS.updateUserProfile,
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${Utils.loggedInUser?.token}`,
        },
        data: formData,
      },
    },
  };
};

export function updateUserProfile(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(updateUserProfile_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getProfile_api = () => ({
  type: userConstants.getProfile,
  payload: {
    request: {
      url: API_URLS.getProfile,
    },
  },
});

export function getProfile() {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getProfile_api());
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const topicPracticeReport_api = (data: any) => ({
  type: userConstants.topicPracticeReport,
  payload: {
    request: {
      url: API_URLS.topicPracticeReport,
      data,
    },
  },
});

export function topicPracticeReport(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(topicPracticeReport_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const startMockTest_api = (data: any) => ({
  type: userConstants.startMockTest,
  payload: {
    request: {
      url: API_URLS.startMockTest,
      data,
    },
  },
});

export function startMockTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(startMockTest_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const prevMockQuestion_api = (data: any) => ({
  type: userConstants.prevMockQuestion,
  payload: {
    request: {
      url: API_URLS.prevMockQuestion,
      method: 'post',
      data,
    },
  },
});

export function prevMockQuestion(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(prevMockQuestion_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const nextMockQuestion_api = (data: any) => ({
  type: userConstants.nextMockQuestion,
  payload: {
    request: {
      url: API_URLS.nextMockQuestion,
      method: 'post',
      data,
    },
  },
});

export function nextMockQuestion(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(nextMockQuestion_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const endTopicTest_api = (data: any) => ({
  type: userConstants.endTopicTest,
  payload: {
    request: {
      url: API_URLS.endTopicTest,
      data,
    },
  },
});

export function endTopicTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(endTopicTest_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const hazardPreparation_api = () => ({
  type: userConstants.hazardPreparation,
  payload: {
    request: {
      url: API_URLS.hazardPreparation,
    },
  },
});

export function hazardPreparation() {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(hazardPreparation_api());
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const hazardPreparationVideos_api = () => ({
  type: userConstants.hazardPreparationVideos,
  payload: {
    request: {
      url: API_URLS.hazardPreparationVideos,
    },
  },
});

export function hazardPreparationVideos() {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(hazardPreparationVideos_api());
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getGroupVideos_api = (data: any) => ({
  type: userConstants.getGroupVideos,
  payload: {
    request: {
      url: API_URLS.getGroupVideos,
      data,
    },
  },
});

export function getGroupVideos(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getGroupVideos_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const startVideoTest_api = (data: any) => ({
  type: userConstants.startVideoTest,
  payload: {
    request: {
      url: API_URLS.startVideoTest,
      data,
    },
  },
});

export function startVideoTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(startVideoTest_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const updateUserDeleteStatus_api = () => ({
  type: userConstants.updateUserDeleteStatus,
  payload: {
    request: {
      url: API_URLS.updateUserDeleteStatus,
    },
  },
});

export function updateUserDeleteStatus() {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(updateUserDeleteStatus_api());
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const forgetPassword_api = (data: any) => ({
  type: userConstants.forgetPassword,
  payload: {
    request: {
      url: API_URLS.forgetPassword,
      method: 'post',
      data,
    },
  },
});

export function forgetPassword(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(forgetPassword_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const mockTestReport_api = (data: any) => ({
  type: userConstants.mockTestReport,
  payload: {
    request: {
      url: API_URLS.mockTestReport,
      data,
    },
  },
});

export function mockTestReport(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(mockTestReport_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getAnswerView_api = (data: any) => ({
  type: userConstants.getAnswerView,
  payload: {
    request: {
      url: API_URLS.getAnswerView,
      data,
    },
  },
});

export function getAnswerView(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getAnswerView_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const hazardPerceptionTestReport_api = () => ({
  type: userConstants.hazardPerceptionTestReport,
  payload: {
    request: {
      url: API_URLS.hazardPerceptionTestReport,
    },
  },
});

export function hazardPerceptionTestReport() {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(hazardPerceptionTestReport_api());
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const saveVideo_api = (data: any) => ({
  type: userConstants.saveVideo,
  payload: {
    request: {
      url: API_URLS.saveVideo,
      method: 'post',
      data,
    },
  },
});

export function saveVideo(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(saveVideo_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const exceedClicks_api = (data: any) => ({
  type: userConstants.exceedClicks,
  payload: {
    request: {
      url: API_URLS.exceedClicks,
      method: 'post',
      data,
    },
  },
});

export function exceedClicks(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(exceedClicks_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const clickedHotspot_api = (data: any) => ({
  type: userConstants.clickedHotspot,
  payload: {
    request: {
      url: API_URLS.clickedHotspot,
      method: 'post',
      data,
    },
  },
});

export function clickedHotspot(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(clickedHotspot_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const endVideoTest_api = (data: any) => ({
  type: userConstants.endVideoTest,
  payload: {
    request: {
      url: API_URLS.endVideoTest,
      method: 'post',
      data,
    },
  },
});

export function endVideoTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(endVideoTest_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getQuestionNote_api = (data: any) => ({
  type: userConstants.getQuestionNote,
  payload: {
    request: {
      url: API_URLS.getQuestionNote,
      data,
    },
  },
});

export function getQuestionNote(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getQuestionNote_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getNotification_api = (data: any) => ({
  type: userConstants.getNotification,
  payload: {
    request: {
      url: API_URLS.getNotification,
      data,
    },
  },
});

export function getNotification(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getNotification_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const deleteNotification_api = (data: any) => ({
  type: userConstants.deleteNotification,
  payload: {
    request: {
      url: API_URLS.deleteNotification,
      method: 'post',
      data,
    },
  },
});

export function deleteNotification(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(deleteNotification_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const deleteAllNotification_api = () => ({
  type: userConstants.deleteAllNotification,
  payload: {
    request: {
      url: API_URLS.deleteAllNotification,
      method: 'post',
    },
  },
});

export function deleteAllNotification() {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(deleteAllNotification_api());
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getAllCasestudy_api = (data: any) => ({
  type: userConstants.getAllCasestudy,
  payload: {
    request: {
      url: API_URLS.getAllCasestudy,
      data,
    },
  },
});

export function getAllCasestudy(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getAllCasestudy_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const caseStudyTestDetail_api = (data: any) => ({
  type: userConstants.caseStudyTestDetail,
  payload: {
    request: {
      url: API_URLS.caseStudyTestDetail,
      data,
    },
  },
});

export function caseStudyTestDetail(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(caseStudyTestDetail_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const startCaseStudyTest_api = (data: any) => ({
  type: userConstants.startCaseStudyTest,
  payload: {
    request: {
      url: API_URLS.startCaseStudyTest,
      method: 'post',
      data,
    },
  },
});

export function startCaseStudyTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(startCaseStudyTest_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const nextCaseStudyQuestion_api = (data: any) => ({
  type: userConstants.nextCaseStudyQuestion,
  payload: {
    request: {
      url: API_URLS.nextCaseStudyQuestion,
      method: 'post',
      data,
    },
  },
});

export function nextCaseStudyQuestion(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(nextCaseStudyQuestion_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const prevCaseStudyQuestion_api = (data: any) => ({
  type: userConstants.prevCaseStudyQuestion,
  payload: {
    request: {
      url: API_URLS.prevCaseStudyQuestion,
      method: 'post',
      data,
    },
  },
});

export function prevCaseStudyQuestion(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(prevCaseStudyQuestion_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const endCsTopicTest_api = (data: any) => ({
  type: userConstants.endCsTopicTest,
  payload: {
    request: {
      url: API_URLS.endCsTopicTest,
      data,
    },
  },
});

export function endCsTopicTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(endCsTopicTest_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const startCsMockTest_api = (data: any) => ({
  type: userConstants.startCsMockTest,
  payload: {
    request: {
      url: API_URLS.startCsMockTest,
      method: 'post',
      data,
    },
  },
});

export function startCsMockTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(startCsMockTest_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const nextCsMockQuestion_api = (data: any) => ({
  type: userConstants.nextCsMockQuestion,
  payload: {
    request: {
      url: API_URLS.nextCsMockQuestion,
      method: 'post',
      data,
    },
  },
});

export function nextCsMockQuestion(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(nextCsMockQuestion_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const prevCsMockQuestion_api = (data: any) => ({
  type: userConstants.prevCsMockQuestion,
  payload: {
    request: {
      url: API_URLS.prevCsMockQuestion,
      method: 'post',
      data,
    },
  },
});

export function prevCsMockQuestion(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(prevCsMockQuestion_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}


export const endCsMockTest_api = (data: any) => ({
  type: userConstants.endCsMockTest,
  payload: {
    request: {
      url: API_URLS.endCsMockTest,
      data,
    },
  },
});

export function endCsMockTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(endCsMockTest_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getAllCaseStudyTest_api = (data: any) => ({
  type: userConstants.getAllCaseStudyTest,
  payload: {
    request: {
      url: API_URLS.getAllCaseStudyTest,
      data,
    },
  },
});

export function getAllCaseStudyTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getAllCaseStudyTest_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getAllCsMockTest_api = (data: any) => ({
  type: userConstants.getAllCsMockTest,
  payload: {
    request: {
      url: API_URLS.getAllCsMockTest,
      data,
    },
  },
});

export function getAllCsMockTest(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getAllCsMockTest_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const getAvailableModules_api = () => ({
  type: userConstants.getAvailableModules,
  payload: {
    request: {
      url: API_URLS.getAvailableModules,
    },
  },
});

export function getAvailableModules() {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(getAvailableModules_api());
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}

export const modulePayment_api = (data: any) => ({
  type: userConstants.modulePayment,
  payload: {
    request: {
      url: API_URLS.modulePayment,
      method: 'post',
      data,
    },
  },
});

export function modulePayment(params: any) {
  return async (dispatch: any) => {
    try {
      const response = await dispatch(modulePayment_api(params));
      if (response.payload) {
        const {data} = response.payload;
        return data;
      }
      throw response;
    } catch (error: any) {
      throw error.response;
    }
  };
}
