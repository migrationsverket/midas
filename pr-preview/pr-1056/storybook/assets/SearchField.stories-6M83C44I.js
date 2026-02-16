import{r as m,f as l,j as t}from"./iframe-DJUtdHwV.js";import{S as d}from"./SearchField-CngooQ_o.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D2bJIFJs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C1jOx-dc.js";import"./utils-D4RE6qhK.js";import"./useLocalizedStringFormatter-W5YzKkQs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DI7yS5us.js";import"./useFocusRing-C5U0CiHo.js";import"./index-CVKq7ZZT.js";import"./index-Ha_8AofU.js";import"./useFormValidation-DRqFyOxo.js";import"./useField-0I64IgUK.js";import"./Button-bQvo04EJ.js";import"./Hidden-DPRRZP9g.js";import"./useLabels-Duan9ykz.js";import"./useButton-D3H5VeWz.js";import"./search-7CZUHE_u.js";import"./createLucideIcon-SxhoPmH3.js";import"./ClearButton-D3uF1VqX.js";import"./Button-CThTpwQ6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-5gvZJBEc.js";import"./VisuallyHidden-m39w7boQ.js";import"./x-BHtKcay4.js";import"./FieldError-C9oMwrfJ.js";import"./Text-B58uuGYq.js";import"./Text-Dl70Vupn.js";import"./RSPContexts-CeL7Ybna.js";import"./Collection-DaGi1ZdJ.js";import"./index-BSsOzAdI.js";import"./DragAndDrop-CfOnTYjv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D3PmNYx2.js";import"./SelectionManager-gpdXDHRv.js";import"./useEvent-T3MosaLJ.js";import"./useDescription-nXINSnLi.js";import"./inertValue-mwKAUJtz.js";import"./useHighlightSelectionDescription-DS3k7jZZ.js";import"./useUpdateEffect-C583A1uJ.js";import"./ListKeyboardDelegate-65Ez9XKB.js";import"./useHasTabbableChild-DjnxL4uk.js";import"./Checkbox-DpWjo_MN.js";import"./Form-Bx3qbLf4.js";import"./check-D-TOVba6.js";import"./useToggleState-CwtW0qhg.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
