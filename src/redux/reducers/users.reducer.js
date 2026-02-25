import { userConstants } from '../constants';
import { success, failure } from '../../redux/redux';

const initialState = {
  isRequesting: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    //Login user
    case userConstants.LOGIN:
      return { ...state, isRequesting: true };
    case success(userConstants.LOGIN):
    case failure(userConstants.LOGIN):
      return { ...state, isRequesting: false };

    //register user
    case userConstants.register:
      return { ...state, isRequesting: true };
    case success(userConstants.register):
    case failure(userConstants.register):
      return { ...state, isRequesting: false };

    //getModuleDetail user
    case userConstants.getModuleDetail:
      return { ...state, isRequesting: true };
    case success(userConstants.getModuleDetail):
    case failure(userConstants.getModuleDetail):
      return { ...state, isRequesting: false };

    //getModuleDetail user
    case userConstants.getTopics:
      return { ...state, isRequesting: true };
    case success(userConstants.getTopics):
    case failure(userConstants.getTopics):
      return { ...state, isRequesting: false };

    //getModuleDetail user
    case userConstants.getTopicLesson:
      return { ...state, isRequesting: true };
    case success(userConstants.getTopicLesson):
    case failure(userConstants.getTopicLesson):
      return { ...state, isRequesting: false };

    //userTopicQuestions user
    case userConstants.userTopicQuestions:
      return { ...state, isRequesting: true };
    case success(userConstants.userTopicQuestions):
    case failure(userConstants.userTopicQuestions):
      return { ...state, isRequesting: false };

    //startTopicTest user
    case userConstants.startTopicTest:
      return { ...state, isRequesting: true };
    case success(userConstants.startTopicTest):
    case failure(userConstants.startTopicTest):
      return { ...state, isRequesting: false };

    //saveMyQuestion user
    case userConstants.saveMyQuestion:
      return { ...state, isRequesting: true };
    case success(userConstants.saveMyQuestion):
    case failure(userConstants.saveMyQuestion):
      return { ...state, isRequesting: false };

    //questionNote user
    case userConstants.questionNote:
      return { ...state, isRequesting: true };
    case success(userConstants.questionNote):
    case failure(userConstants.questionNote):
      return { ...state, isRequesting: false };

    //changeUserPassword user
    case userConstants.changeUserPassword:
      return { ...state, isRequesting: true };
    case success(userConstants.changeUserPassword):
    case failure(userConstants.changeUserPassword):
      return { ...state, isRequesting: false };

    //updateUserProfile user
    case userConstants.updateUserProfile:
      return { ...state, isRequesting: true };
    case success(userConstants.updateUserProfile):
    case failure(userConstants.updateUserProfile):
      return { ...state, isRequesting: false };

    //getProfile user
    case userConstants.getProfile:
      return { ...state, isRequesting: true };
    case success(userConstants.getProfile):
    case failure(userConstants.getProfile):
      return { ...state, isRequesting: false };

    //topicPracticeReport user
    case userConstants.topicPracticeReport:
      return { ...state, isRequesting: true };
    case success(userConstants.topicPracticeReport):
    case failure(userConstants.topicPracticeReport):
      return { ...state, isRequesting: false };

    //startMockTest user
    case userConstants.startMockTest:
      return { ...state, isRequesting: true };
    case success(userConstants.startMockTest):
    case failure(userConstants.startMockTest):
      return { ...state, isRequesting: false };

    //endTopicTest user
    case userConstants.endTopicTest:
      return { ...state, isRequesting: true };
    case success(userConstants.endTopicTest):
    case failure(userConstants.endTopicTest):
      return { ...state, isRequesting: false };

    //hazardPreparationVideos user
    case userConstants.hazardPreparationVideos:
      return { ...state, isRequesting: true };
    case success(userConstants.hazardPreparationVideos):
    case failure(userConstants.hazardPreparationVideos):
      return { ...state, isRequesting: false };

    //getGroupVideos user
    case userConstants.getGroupVideos:
      return { ...state, isRequesting: true };
    case success(userConstants.getGroupVideos):
    case failure(userConstants.getGroupVideos):
      return { ...state, isRequesting: false };

    //startVideoTest user
    case userConstants.startVideoTest:
      return { ...state, isRequesting: true };
    case success(userConstants.startVideoTest):
    case failure(userConstants.startVideoTest):
      return { ...state, isRequesting: false };

    //updateUserDeleteStatus user
    case userConstants.updateUserDeleteStatus:
      return { ...state, isRequesting: true };
    case success(userConstants.updateUserDeleteStatus):
    case failure(userConstants.updateUserDeleteStatus):
      return { ...state, isRequesting: false };

    //forgetPassword user
    case userConstants.forgetPassword:
      return { ...state, isRequesting: true };
    case success(userConstants.forgetPassword):
    case failure(userConstants.forgetPassword):
      return { ...state, isRequesting: false };

    //mockTestReport user
    case userConstants.mockTestReport:
      return { ...state, isRequesting: true };
    case success(userConstants.mockTestReport):
    case failure(userConstants.mockTestReport):
      return { ...state, isRequesting: false };

    //getAnswerView user
    case userConstants.getAnswerView:
      return { ...state, isRequesting: true };
    case success(userConstants.getAnswerView):
    case failure(userConstants.getAnswerView):
      return { ...state, isRequesting: false };

    //hazardPerceptionTestReport user
    case userConstants.hazardPerceptionTestReport:
      return { ...state, isRequesting: true };
    case success(userConstants.hazardPerceptionTestReport):
    case failure(userConstants.hazardPerceptionTestReport):
      return { ...state, isRequesting: false };

    //startVideoTest user
    case userConstants.startVideoTest:
      return { ...state, isRequesting: true };
    case success(userConstants.startVideoTest):
    case failure(userConstants.startVideoTest):
      return { ...state, isRequesting: false };

    //saveVideo user
    case userConstants.saveVideo:
      return { ...state, isRequesting: true };
    case success(userConstants.saveVideo):
    case failure(userConstants.saveVideo):
      return { ...state, isRequesting: false };

    //endVideoTest user
    case userConstants.endVideoTest:
      return { ...state, isRequesting: true };
    case success(userConstants.endVideoTest):
    case failure(userConstants.endVideoTest):
      return { ...state, isRequesting: false };

    //getQuestionNote user
    case userConstants.getQuestionNote:
      return { ...state, isRequesting: true };
    case success(userConstants.getQuestionNote):
    case failure(userConstants.getQuestionNote):
      return { ...state, isRequesting: false };

    //getNotification user
    // case userConstants.getNotification:
    //   return {...state, isRequesting: true};
    // case success(userConstants.getNotification):
    // case failure(userConstants.getNotification):
    //   return {...state, isRequesting: false};

    //deleteNotification user
    case userConstants.deleteNotification:
      return { ...state, isRequesting: true };
    case success(userConstants.deleteNotification):
    case failure(userConstants.deleteNotification):
      return { ...state, isRequesting: false };

    //deleteAllNotification user
    case userConstants.deleteAllNotification:
      return { ...state, isRequesting: true };
    case success(userConstants.deleteAllNotification):
    case failure(userConstants.deleteAllNotification):
      return { ...state, isRequesting: false };

    //getAllCasestudy user
    case userConstants.getAllCasestudy:
      return { ...state, isRequesting: true };
    case success(userConstants.getAllCasestudy):
    case failure(userConstants.getAllCasestudy):
      return { ...state, isRequesting: false };

    //caseStudyTestDetail user
    case userConstants.caseStudyTestDetail:
      return { ...state, isRequesting: true };
    case success(userConstants.caseStudyTestDetail):
    case failure(userConstants.caseStudyTestDetail):
      return { ...state, isRequesting: false };

    //startCaseStudyTest user
    case userConstants.startCaseStudyTest:
      return { ...state, isRequesting: true };
    case success(userConstants.startCaseStudyTest):
    case failure(userConstants.startCaseStudyTest):
      return { ...state, isRequesting: false };

    //nextCaseStudyQuestion user
    case userConstants.nextCaseStudyQuestion:
      return { ...state, isRequesting: true };
    case success(userConstants.nextCaseStudyQuestion):
    case failure(userConstants.nextCaseStudyQuestion):
      return { ...state, isRequesting: false };

    //prevCaseStudyQuestion user
    case userConstants.prevCaseStudyQuestion:
      return { ...state, isRequesting: true };
    case success(userConstants.prevCaseStudyQuestion):
    case failure(userConstants.prevCaseStudyQuestion):
      return { ...state, isRequesting: false };

    //endCsTopicTest user
    case userConstants.endCsTopicTest:
      return { ...state, isRequesting: true };
    case success(userConstants.endCsTopicTest):
    case failure(userConstants.endCsTopicTest):
      return { ...state, isRequesting: false };

    //startCsMockTest user
    case userConstants.startCsMockTest:
      return { ...state, isRequesting: true };
    case success(userConstants.startCsMockTest):
    case failure(userConstants.startCsMockTest):
      return { ...state, isRequesting: false };

    //nextCsMockQuestion user
    case userConstants.nextCsMockQuestion:
      return { ...state, isRequesting: true };
    case success(userConstants.nextCsMockQuestion):
    case failure(userConstants.nextCsMockQuestion):
      return { ...state, isRequesting: false };

    //prevCsMockQuestion user
    case userConstants.prevCsMockQuestion:
      return { ...state, isRequesting: true };
    case success(userConstants.prevCsMockQuestion):
    case failure(userConstants.prevCsMockQuestion):
      return { ...state, isRequesting: false };

    //getAllCaseStudyTest user
    case userConstants.getAllCaseStudyTest:
      return { ...state, isRequesting: true };
    case success(userConstants.getAllCaseStudyTest):
    case failure(userConstants.getAllCaseStudyTest):
      return { ...state, isRequesting: false };

    //getAllCsMockTest user
    case userConstants.getAllCsMockTest:
      return { ...state, isRequesting: true };
    case success(userConstants.getAllCsMockTest):
    case failure(userConstants.getAllCsMockTest):
      return { ...state, isRequesting: false };

    //endCsMockTest user
    case userConstants.endCsMockTest:
      return { ...state, isRequesting: true };
    case success(userConstants.endCsMockTest):
    case failure(userConstants.endCsMockTest):
      return { ...state, isRequesting: false };

    //endCsMockTest user
    case userConstants.getAvailableModules:
      return { ...state, isRequesting: true };
    case success(userConstants.getAvailableModules):
    case failure(userConstants.getAvailableModules):
      return { ...state, isRequesting: false };

    //endCsMockTest user
    case userConstants.modulePayment:
      return { ...state, isRequesting: true };
    case success(userConstants.modulePayment):
    case failure(userConstants.modulePayment):
      return { ...state, isRequesting: false };

    default:
      return state;
  }
};
export default usersReducer;
