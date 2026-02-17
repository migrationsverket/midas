import{r as m,f as l,j as t}from"./iframe-DTfJSErE.js";import{S as d}from"./SearchField-3CB6z02S.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-VjKoNdm6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BaQo_f5T.js";import"./utils-B73muxhO.js";import"./useLocalizedStringFormatter-uC-u8m9n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ClhpYlTr.js";import"./useFocusRing-B1zsHiit.js";import"./index-BUT5P9H-.js";import"./index-CgWBRnNX.js";import"./useFormValidation-dfBlIUiS.js";import"./useField-lTpGylRL.js";import"./Button-DSjX8i_m.js";import"./Hidden-D7A9_Rse.js";import"./useLabels-BqfQS0uq.js";import"./useButton-oYO7zjMC.js";import"./search-BeqUjNF5.js";import"./createLucideIcon-DuvGCIEA.js";import"./ClearButton-CWbcsbLr.js";import"./Button-Bw1mXw0X.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BApN70s6.js";import"./VisuallyHidden-CKITv4VW.js";import"./x-D3PqQT5R.js";import"./FieldError-Bkpg5gnq.js";import"./Text-D5Dq4q45.js";import"./Text-DDwjjFnB.js";import"./RSPContexts-DA83ZcWW.js";import"./Collection-Cywdh-W1.js";import"./index-lje2h9lu.js";import"./DragAndDrop-DOh8ZvWk.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CcF_Y5ct.js";import"./SelectionManager-C9R0-jGz.js";import"./useEvent-BxSLArWq.js";import"./useDescription-gEBlcK5R.js";import"./inertValue-DwZdN77P.js";import"./useHighlightSelectionDescription-CLm5qnyT.js";import"./useUpdateEffect-CkRKkXMC.js";import"./ListKeyboardDelegate-BlP5VjP_.js";import"./useHasTabbableChild-xN9xB0xQ.js";import"./Checkbox-ptjXMIs0.js";import"./Form-DPNHWdAN.js";import"./check-B-k24r0c.js";import"./useToggleState-Cved7GcD.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
