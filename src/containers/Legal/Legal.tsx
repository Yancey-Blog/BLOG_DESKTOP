import * as React from 'react';
import Title from '@components/Common/Title/Title';
import styles from './Legal.module.scss';
import { webpSuffix, socialMedia, legalBg } from '@constants/constants';

class Legal extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <main>
        <Title title='Privacy Policy' />
        <figure
          className={styles.bg_img}
          style={{
            backgroundImage: `url(${
              isWebp ? `${legalBg}${webpSuffix}` : legalBg
            })`,
          }}
        />
        <article className={styles.privacy_policy_container}>
          <h1>Privacy Policy</h1>
          <ul className={styles.anchor}>
            <li>
              <a href='#Types_of_Data_collected'>I. Types of Data collected</a>
            </li>
            <li>
              <a href='#Mode_and_place_of_processing_the_Data'>
                II. Mode and place of processing the Data
              </a>
            </li>
            <li>
              <a href='#The_purposes_of_processing'>
                III. The purposes of processing
              </a>
            </li>
            <li>
              <a href='#Detailed_information_on_the_processing_of_Personal_Data'>
                IV. Detailed information on the processing of Personal Data
              </a>
            </li>
            <li>
              <a href='#The_rights_of_Users'>V. The rights of Users</a>
            </li>
            <li>
              <a href='#Additional_information_about_Data_collection_and_processing'>
                VI. Additional information about Data collection and processing
              </a>
            </li>
            <li>
              <a href='#Detailed_information_on_the_processing_of_Personal_Data'>
                VII. Detailed information on the processing of Personal Data
              </a>
            </li>
            <li>
              <a href='#Definitions_and_legal_references'>
                VIII. Definitions and legal references
              </a>
            </li>
            <li>
              <a href='#Owner_and_Data_Controller'>
                IX. Owner and Data Controller
              </a>
            </li>
          </ul>
          <span className={styles.target_fix} id='Types_of_Data_collected' />
          <h2>I. Types of Data collected</h2>
          <p>
            Among the types of Personal Data that this Application collects, by
            itself or through third parties, there are: Cookies and Usage Data.
          </p>
          <p>
            Complete details on each type of Personal Data collected are
            provided in the dedicated sections of this privacy policy or by
            specific explanation texts displayed prior to the Data collection.
          </p>
          <p>
            Personal Data may be freely provided by the User, or, in case of
            Usage Data, collected automatically when using this Application.
          </p>
          <p>
            Unless specified otherwise, all Data requested by this Application
            is mandatory and failure to provide this Data may make it impossible
            for this Application to provide its services. In cases where this
            Application specifically states that some Data is not mandatory,
            Users are free not to communicate this Data without consequences to
            the availability or the functioning of the Service.
          </p>
          <p>
            Users who are uncertain about which Personal Data is mandatory are
            welcome to contact the Owner.
          </p>
          <p>
            Any use of Cookies – or of other tracking tools – by this
            Application or by the owners of third-party services used by this
            Application serves the purpose of providing the Service required by
            the User, in addition to any other purposes described in the present
            document and in the Cookie Policy, if available.
          </p>
          <p>
            Users are responsible for any third-party Personal Data obtained,
            published or shared through this Application and confirm that they
            have the third party′s consent to provide the Data to the Owner.
          </p>
          <span
            className={styles.target_fix}
            id='Mode_and_place_of_processing_the_Data'
          />
          <h2>II. Mode and place of processing the Data</h2>
          <h3>Methods of processing</h3>
          <p>
            The Owner takes appropriate security measures to prevent
            unauthorized access, disclosure, modification, or unauthorized
            destruction of the Data.
          </p>
          <p>
            The Data processing is carried out using computers and/or IT enabled
            tools, following organizational procedures and modes strictly
            related to the purposes indicated. In addition to the Owner, in some
            cases, the Data may be accessible to certain types of persons in
            charge, involved with the operation of this Application
            (administration, sales, marketing, legal, system administration) or
            external parties (such as third-party technical service providers,
            mail carriers, hosting providers, IT companies, communications
            agencies) appointed, if necessary, as Data Processors by the Owner.
            The updated list of these parties may be requested from the Owner at
            any time.
          </p>
          <h3>Legal basis of processing</h3>
          <p>
            The Owner may process Personal Data relating to Users if one of the
            following applies:
          </p>
          <ul>
            <li>
              <p>
                Users have given their consent for one or more specific
                purposes. Note: Under some legislations the Owner may be allowed
                to process Personal Data until the User objects to such
                processing (“opt-out”), without having to rely on consent or any
                other of the following legal bases. This, however, does not
                apply, whenever the processing of Personal Data is subject to
                European data protection law;
              </p>
            </li>
            <li>
              <p>
                provision of Data is necessary for the performance of an
                agreement with the User and/or for any pre-contractual
                obligations thereof;
              </p>
            </li>
            <li>
              <p>
                processing is necessary for compliance with a legal obligation
                to which the Owner is subject;
              </p>
            </li>
            <li>
              <p>
                processing is related to a task that is carried out in the
                public interest or in the exercise of official authority vested
                in the Owner;
              </p>
            </li>
            <li>
              <p>
                processing is necessary for the purposes of the legitimate
                interests pursued by the Owner or by a third party.
              </p>
            </li>
          </ul>
          <p>
            In any case, the Owner will gladly help to clarify the specific
            legal basis that applies to the processing, and in particular
            whether the provision of Personal Data is a statutory or contractual
            requirement, or a requirement necessary to enter into a contract.
          </p>
          <h3>Place</h3>
          <p>
            The Data is processed at the Owner′s operating offices and in any
            other places where the parties involved in the processing are
            located.
          </p>
          <p>
            Depending on the User′s location, data transfers may involve
            transferring the User′s Data to a country other than their own. To
            find out more about the place of processing of such transferred
            Data, Users can check the section containing details about the
            processing of Personal Data.
          </p>
          <p>
            Users are also entitled to learn about the legal basis of Data
            transfers to a country outside the European Union or to any
            international organization governed by public international law or
            set up by two or more countries, such as the UN, and about the
            security measures taken by the Owner to safeguard their Data.
          </p>
          <p>
            If any such transfer takes place, Users can find out more by
            checking the relevant sections of this document or inquire with the
            Owner using the information provided in the contact section.
          </p>
          <h3>Retention time</h3>
          <p>
            Personal Data shall be processed and stored for as long as required
            by the purpose they have been collected for.
          </p>
          <p>Therefore:</p>
          <ul>
            <li>
              <p>
                Personal Data collected for purposes related to the performance
                of a contract between the Owner and the User shall be retained
                until such contract has been fully performed.
              </p>
            </li>
            <li>
              <p>
                Personal Data collected for the purposes of the Owner’s
                legitimate interests shall be retained as long as needed to
                fulfill such purposes. Users may find specific information
                regarding the legitimate interests pursued by the Owner within
                the relevant sections of this document or by contacting the
                Owner.
              </p>
            </li>
          </ul>
          <p>
            The Owner may be allowed to retain Personal Data for a longer period
            whenever the User has given consent to such processing, as long as
            such consent is not withdrawn. Furthermore, the Owner may be obliged
            to retain Personal Data for a longer period whenever required to do
            so for the performance of a legal obligation or upon order of an
            authority.
          </p>
          <p>
            Once the retention period expires, Personal Data shall be deleted.
            Therefore, the right to access, the right to erasure, the right to
            rectification and the right to data portability cannot be enforced
            after expiration of the retention period.
          </p>
          <span className={styles.target_fix} id='The_purposes_of_processing' />
          <h2>III. The purposes of processing</h2>
          <p>
            The Data concerning the User is collected to allow the Owner to
            provide its Services, as well as for the following purposes:
            Analytics, Registration and authentication and Interaction with
            external social networks and platforms.
          </p>
          <p>
            Users can find further detailed information about such purposes of
            processing and about the specific Personal Data used for each
            purpose in the respective sections of this document.
          </p>
          <span
            className={styles.target_fix}
            id='Detailed_information_on_the_processing_of_Personal_Data'
          />
          <h2>IV. Detailed information on the processing of Personal Data</h2>
          <p>
            Personal Data is collected for the following purposes and using the
            following services:
          </p>
          <span className={styles.target_fix} id='The_rights_of_Users' />
          <h2>V. The rights of Users</h2>
          <p>
            Users may exercise certain rights regarding their Data processed by
            the Owner.
          </p>
          <p>In particular, Users have the right to do the following:</p>
          <ul>
            <li>
              <p>
                <span>Withdraw their consent at any time. </span>
                Users have the right to withdraw consent where they have
                previously given their consent to the processing of their
                Personal Data.
              </p>
            </li>
            <li>
              <p>
                <span>Object to processing of their Data. </span>
                Users have the right to object to the processing of their Data
                if the processing is carried out on a legal basis other than
                consent. Further details are provided in the dedicated section
                below.
              </p>
            </li>
            <li>
              <p>
                <span>Access their Data. </span>
                Users have the right to learn if Data is being processed by the
                Owner, obtain disclosure regarding certain aspects of the
                processing and obtain a copy of the Data undergoing processing.
              </p>
            </li>
            <li>
              <p>
                <span>Verify and seek rectification. </span>
                Users have the right to verify the accuracy of their Data and
                ask for it to be updated or corrected.
              </p>
            </li>
            <li>
              <p>
                <span>Restrict the processing of their Data. </span>
                Users have the right, under certain circumstances, to restrict
                the processing of their Data. In this case, the Owner will not
                process their Data for any purpose other than storing it.
              </p>
            </li>
            <li>
              <p>
                <span>
                  Have their Personal Data deleted or otherwise removed.{' '}
                </span>
                Users have the right, under certain circumstances, to obtain the
                erasure of their Data from the Owner.
              </p>
            </li>
            <li>
              <p>
                <span>
                  Receive their Data and have it transferred to another
                  controller.{' '}
                </span>
                Users have the right to receive their Data in a structured,
                commonly used and machine readable format and, if technically
                feasible, to have it transmitted to another controller without
                any hindrance. This provision is applicable provided that the
                Data is processed by automated means and that the processing is
                based on the User’s consent, on a contract which the User is
                part of or on pre-contractual obligations thereof.
              </p>
            </li>
            <li>
              <p>
                <span>Lodge a complaint. </span>
                Users have the right to bring a claim before their competent
                data protection authority.
              </p>
            </li>
          </ul>
          <h3>Details about the right to object to processing</h3>
          <p>
            Where Personal Data is processed for a public interest, in the
            exercise of an official authority vested in the Owner or for the
            purposes of the legitimate interests pursued by the Owner, Users may
            object to such processing by providing a ground related to their
            particular situation to justify the objection.
          </p>
          <p>
            Users must know that, however, should their Personal Data be
            processed for direct marketing purposes, they can object to that
            processing at any time without providing any justification. To
            learn, whether the Owner is processing Personal Data for direct
            marketing purposes, Users may refer to the relevant sections of this
            document.
          </p>
          <h3>How to exercise these rights</h3>
          <p>
            Any requests to exercise User rights can be directed to the Owner
            through the contact details provided in this document. These
            requests can be exercised free of charge and will be addressed by
            the Owner as early as possible and always within one month.
          </p>
          <span
            className={styles.target_fix}
            id='Additional_information_about_Data_collection_and_processing'
          />
          <h2>
            VI. Additional information about Data collection and processing
          </h2>
          <h3>Legal action</h3>
          <p>
            The User′s Personal Data may be used for legal purposes by the Owner
            in Court or in the stages leading to possible legal action arising
            from improper use of this Application or the related Services.
          </p>
          <p>
            The User declares to be aware that the Owner may be required to
            reveal personal data upon request of public authorities.
          </p>
          <h3>Additional information about User′s Personal Data</h3>
          <p>
            In addition to the information contained in this privacy policy,
            this Application may provide the User with additional and contextual
            information concerning particular Services or the collection and
            processing of Personal Data upon request.
          </p>
          <h3>System logs and maintenance</h3>
          <p>
            For operation and maintenance purposes, this Application and any
            third-party services may collect files that record interaction with
            this Application (System logs) use other Personal Data (such as the
            IP Address) for this purpose.
          </p>
          <h3>Information not contained in this policy</h3>
          <p>
            More details concerning the collection or processing of Personal
            Data may be requested from the Owner at any time. Please see the
            contact information at the beginning of this document.
          </p>
          <h3>How “Do Not Track” requests are handled</h3>
          <p>This Application does not support “Do Not Track” requests.</p>
          <p>
            To determine whether any of the third-party services it uses honor
            the “Do Not Track” requests, please read their privacy policies.
          </p>
          <h3>Changes to this privacy policy</h3>
          <p>
            The Owner reserves the right to make changes to this privacy policy
            at any time by giving notice to its Users on this page and possibly
            within this Application and/or - as far as technically and legally
            feasible - sending a notice to Users via any contact information
            available to the Owner. It is strongly recommended to check this
            page often, referring to the date of the last modification listed at
            the bottom.
          </p>
          <p>
            Should the changes affect processing activities performed on the
            basis of the User’s consent, the Owner shall collect new consent
            from the User, where required.
          </p>
          <span
            className={styles.target_fix}
            id='Detailed_information_on_the_processing_of_Personal_Data'
          />
          <h2>VII. Detailed information on the processing of Personal Data</h2>
          <p>
            Personal Data is collected for the following purposes and using the
            following services:
          </p>
          <h3>Analytics</h3>
          <p>
            The services contained in this section enable the Owner to monitor
            and analyze web traffic and can be used to keep track of User
            behavior.
          </p>
          <p>
            Google Analytics is a web analysis service provided by Google Inc.
            (“Google”). Google utilizes the Data collected to track and examine
            the use of this Application, to prepare reports on its activities
            and share them with other Google services. Google may use the Data
            collected to contextualize and personalize the ads of its own
            advertising network. Personal Data collected: Cookies and Usage
            Data.
          </p>
          <p>
            Place of processing: United States –{' '}
            <a href='https://policies.google.com/privacy?hl=en'>
              Privacy Policy
            </a>{' '}
            – Opt Out. Privacy Shield participant.
          </p>
          <h3>Interaction with external social networks and platforms</h3>
          <p>
            This type of service allows interaction with social networks or
            other external platforms directly from the pages of this
            Application.
          </p>
          <p>
            The interaction and information obtained through this Application
            are always subject to the User’s privacy settings for each social
            network.
          </p>
          <p>
            This type of service might still collect traffic data for the pages
            where the service is installed, even when Users do not use it.
          </p>
          <p>
            The Twitter Tweet button and social widgets are services allowing
            interaction with the Twitter social network provided by Twitter,
            Inc. Personal Data collected: Cookies and Usage Data.
          </p>
          <p>
            Place of processing: United States –{' '}
            <a href='https://twitter.com/en/privacy'>Privacy Policy</a>. Privacy
            Shield participant.
          </p>
          <h3>Registration and authentication</h3>
          <p>
            By registering or authenticating, Users allow this Application to
            identify them and give them access to dedicated services.
          </p>
          <p>
            Depending on what is described below, third parties may provide
            registration and authentication services. In this case, this
            Application will be able to access some Data, stored by these
            third-party services, for registration or identification purposes.
          </p>
          <p>
            GitHub OAuth is a registration and authentication service provided
            by GitHub Inc. and is connected to the GitHub network.
          </p>
          <p>
            Personal Data collected: various types of Data as specified in the
            privacy policy of the service.
          </p>
          <p>
            Place of processing: United States –{' '}
            <a href='https://help.github.com/articles/github-terms-of-service/#b-api-terms'>
              Privacy Policy
            </a>
            . Privacy Shield participant.
          </p>
          <p>
            Google OAuth is a registration and authentication service provided
            by Google Inc. and is connected to the Google network.
          </p>
          <p>
            Personal Data collected: various types of Data as specified in the
            privacy policy of the service.
          </p>
          <p>
            Place of processing: United States –{' '}
            <a href='https://policies.google.com/privacy'>Privacy Policy</a>.
            Privacy Shield participant.
          </p>
          <span
            className={styles.target_fix}
            id='Definitions_and_legal_references'
          />
          <h2>VIII. Definitions and legal references</h2>
          <h3>Personal Data (or Data)</h3>
          <p>
            Any information that directly, indirectly, or in connection with
            other information — including a personal identification number —
            allows for the identification or identifiability of a natural
            person.
          </p>
          <h3>Usage Data</h3>
          <p>
            Information collected automatically through this Application (or
            third-party services employed in this Application), which can
            include: the IP addresses or domain names of the computers utilized
            by the Users who use this Application, the URI addresses (Uniform
            Resource Identifier), the time of the request, the method utilized
            to submit the request to the server, the size of the file received
            in response, the numerical code indicating the status of the
            server’s answer (successful outcome, error, etc.), the country of
            origin, the features of the browser and the operating system
            utilized by the User, the various time details per visit (e.g., the
            time spent on each page within the Application) and the details
            about the path followed within the Application with special
            reference to the sequence of pages visited, and other parameters
            about the device operating system and/or the User’s IT environment.
          </p>
          <h3>User</h3>
          <p>
            The individual using this Application who, unless otherwise
            specified, coincides with the Data Subject.
          </p>
          <h3>Data Subject</h3>
          <p>The natural person to whom the Personal Data refers.</p>
          <h3>Data Processor (or Data Supervisor)</h3>
          <p>
            The natural or legal person, public authority, agency or other body
            which processes Personal Data on behalf of the Controller, as
            described in this privacy policy.
          </p>
          <h3>Data Controller (or Owner)</h3>
          <p>
            The natural or legal person, public authority, agency or other body
            which, alone or jointly with others, determines the purposes and
            means of the processing of Personal Data, including the security
            measures concerning the operation and use of this Application. The
            Data Controller, unless otherwise specified, is the Owner of this
            Application.
          </p>
          <h3>This Application</h3>
          <p>
            The means by which the Personal Data of the User is collected and
            processed.
          </p>
          <h3>Service</h3>
          <p>
            The service provided by this Application as described in the
            relative terms (if available) and on this site/application.
          </p>
          <h3>European Union (or EU)</h3>
          <p>
            Unless otherwise specified, all references made within this document
            to the European Union include all current member states to the
            European Union and the European Economic Area.
          </p>
          <h3>Cookies</h3>
          <p>Small sets of data stored in the User′s device.</p>
          <h3>Legal information</h3>
          <p>
            This privacy statement has been prepared based on provisions of
            multiple legislations, including Art. 13/14 of Regulation (EU)
            2016/679 (General Data Protection Regulation).
          </p>
          <p>
            This privacy policy relates solely to this Application, if not
            stated otherwise within this document.
          </p>
          <span className={styles.target_fix} id='Owner_and_Data_Controller' />
          <h2>IX. Owner and Data Controller</h2>
          <p>Yancey Inc.</p>
          <p>
            <span>Owner contact email: </span>
            {socialMedia.email.url.split(':')[1]}
          </p>
          <hr />
          <p className={styles.update_date}>
            Date of last revision: Tuesday, August 28, 2018
          </p>
        </article>
      </main>
    );
  }
}

export default Legal;
