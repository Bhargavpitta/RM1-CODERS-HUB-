import { Form, Input, Button } from 'antd';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const { TextArea } = Input;

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // Handle form submission
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="contact-pattern-bg" />
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <p className="contact-badge">[ Free Consultation ]</p>
          <h2 className="section-title font-display">Book A Free IT Consultation</h2>
          <p className="contact-subtitle">
            It is a long established fact that a reader will be distracted the readab
            content of a page when looking at layout the point.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-info"
          >
            <div className="contact-detail">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div>
                <p className="contact-label">EMAIL</p>
                <p className="contact-value">info@rm1codershub.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <p className="contact-label">ADDRESS:</p>
                <p className="contact-value">
                  Vasavi Sky City, Office No:2 8th Floor, Telecom Nagar,
                  Gachibowli, Hyderabad - 500032.
                </p>
              </div>
            </div>

           <div className="contact-map">
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.532789823666!2d78.3643484!3d17.4386117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93822d34b1ed%3A0x5458b73c6cf18629!2sVasavi%20Sky%20City!5e0!3m2!1sen!2sin!4v1732689000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-form-wrapper"
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="contact-form"
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Name" size="large" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder="Email" size="large" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Please enter your phone' }]}
              >
                <Input placeholder="Phone" size="large" />
              </Form.Item>

              <Form.Item
                name="company"
                rules={[{ required: true, message: 'Please enter your company name' }]}
              >
                <Input placeholder="Your Company Name" size="large" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea
                  placeholder="Write Your Message Here"
                  rows={4}
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" size="large" htmlType="submit" block>
                  Send Request
                </Button>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
