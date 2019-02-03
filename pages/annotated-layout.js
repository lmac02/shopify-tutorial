import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    SettingToggle,
    Stack,
    TextField,
    TextStyle,
} from '@shopify/polaris';
import store from 'store-js';

class AnnotatedLayout extends React.Component {
    state = {
        user: store.get('user'),
        enabled: false,
    };
    

    render() {
        const { user, enabled } = this.state;
        const contentStatus = enabled ? 'Disable' : 'Enable';
        const textStatus = enabled ? 'enabled' : 'disabled';

        return (
            <Page>
                <Layout>
                    <Layout.AnnotatedSection
                        title="Store Login"
                        description="Save your Shopify store name here"
                    >
                        <Card sectioned>
                            <Form onSubmit={this.handleSubmit}>
                                <FormLayout>
                                    <TextField
                                        value={user}
                                        onChange={this.handleChange('user')}
                                        label="Store Name"
                                        type="user"
                                    />
                                    <Stack distribution="trailing">
                                        <Button 
                                            primary 
                                            submit
                                            onClick={() => store.set('user', this.state.user)}
                                            >
                                            Save
                                        </Button>
                                    </Stack>
                                </FormLayout>
                            </Form>
                        </Card>
                    </Layout.AnnotatedSection>
                    <Layout.AnnotatedSection
                        title={this.i}
                        description="Another setting"
                        >
                        <SettingToggle
                            action={{
                                content: contentStatus,
                                    onAction: this.handleToggle,
                                }}
                            enabled={enabled}
                            >
                            This setting is{' '}
                            <TextStyle variation="strong">{textStatus}</TextStyle>.
                        </SettingToggle>
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
    );
    }
    handleSubmit = () => {
        this.setState({
            user: this.state.user,
        });
        console.log('submission', this.state);
    };
    handleChange = (field) => {
        return (value) => this.setState({[field]: value});
    };
    handleToggle = () => {
        this.setState(({ enabled }) => {
            return { enabled: !enabled };
            });
    };
}

export default AnnotatedLayout;