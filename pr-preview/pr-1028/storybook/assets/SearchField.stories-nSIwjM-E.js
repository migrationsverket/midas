import{r as m,f as l,j as t}from"./iframe-nOsxirQX.js";import{S as d}from"./SearchField-CjNvns_1.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table--KlS45YE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DDwIrHc5.js";import"./utils-Bx1o-H88.js";import"./useLocalizedStringFormatter-CEAmhm35.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BtRrdgvy.js";import"./useFocusRing-D89DlAJn.js";import"./index-BBtn04JY.js";import"./index-4Tg7UEMT.js";import"./useFormValidation-BrKAO3SO.js";import"./useField-BV3Fx_ol.js";import"./Button-DcANhavY.js";import"./Hidden-BQXizKKD.js";import"./useLabels-quzXmLXQ.js";import"./useButton-Bh9NqEET.js";import"./search-BDOjKS3d.js";import"./createLucideIcon-BM5xacqz.js";import"./ClearButton-B22aG76_.js";import"./Button-C_6tr8VE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BrifjVpT.js";import"./VisuallyHidden-D_ts-6oX.js";import"./x-Co742d-j.js";import"./FieldError-BRIeksHU.js";import"./Text-B8fVM-qM.js";import"./Text-66nZ78iJ.js";import"./RSPContexts-qetO-Bd7.js";import"./Collection-NzMDAGr4.js";import"./index-zXchqore.js";import"./DragAndDrop-D5M0j52P.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CQUuNVdz.js";import"./SelectionManager-CyXtJ1CD.js";import"./useEvent-BSYUz00V.js";import"./useDescription-JIsLYad4.js";import"./inertValue-BtCEyQ8w.js";import"./useHighlightSelectionDescription-CXj2fTLj.js";import"./useUpdateEffect-DrecfZNp.js";import"./ListKeyboardDelegate-ByeLr9bU.js";import"./useHasTabbableChild-hh1iqLeB.js";import"./Checkbox-DXBW3FlM.js";import"./Form-DMuDE9rp.js";import"./check-D2B4Z9Fa.js";import"./useToggleState-DHGAkj8F.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
