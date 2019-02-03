import { EmptyState, Layout, Page , ResourcePicker} from '@shopify/polaris';
import store from 'store-js';

class Index extends React.Component {
state = { open: false };
hold = store.get('test');
    render() {
            return (
            <Page
                primaryAction={{
                    content: 'Select products',
                    onAction: () => this.setState({open: true}),
                    onAction: () => store.set("try", "cool"),
                }}
            >
                <ResourcePicker
                    open={this.state.open}
                    resourceType="Product"
                    showVariants={false}
                    onSelection={(resources) => this.handleSelection(resources)}
                    onCancel={() => this.setState({open: false})}/>
                <Layout>
                    <EmptyState
                        heading={this.hold}
                        action={{
                            content: 'Select products',
                            onAction: () => this.setState({open: true}),
                        }}
                        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                    >
                        <p>Select products and change their price temporarily</p>
                    </EmptyState>
                </Layout>
            </Page>
            );
     }
     handleSelection = (resources) => {
        const idsFromResources = resources.selection.map((product) => product.id);
        this.setState({open: false});
        console.log(resources)
     }
}

export default Index;