import{r as m,f as l,j as t}from"./iframe-CSEJNTkK.js";import{S as d}from"./SearchField-pVsr5oTn.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-xgbvPk6z.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4wBbeGG.js";import"./utils-DeJFKvWK.js";import"./useLocalizedStringFormatter-BfRcdDUG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0CKpIct.js";import"./useFocusRing-DrHJkNXb.js";import"./index-D143hsf1.js";import"./index-BMO83btm.js";import"./useFormValidation-87lR2aCk.js";import"./useField-CAM1ffXR.js";import"./Button-C9VKeO5Q.js";import"./Hidden-UvxDhw7H.js";import"./useLabels-BgO5uamo.js";import"./useButton-BhgtOeCo.js";import"./search-YILe9fL3.js";import"./createLucideIcon-ttv-_pDn.js";import"./ClearButton-BO1NvBS-.js";import"./x-DUi-rfHM.js";import"./Button-BNNwT8-I.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BQyjPzmq.js";import"./VisuallyHidden-D49iMATH.js";import"./FieldError-H0rNPMcB.js";import"./Text-D9jZWUtn.js";import"./Text-BZVryx1n.js";import"./RSPContexts-zt9dEm9A.js";import"./Collection-DvLNFqPF.js";import"./index-DIm73aBC.js";import"./DragAndDrop-Bljs2vDN.js";import"./getScrollParent-BjkCtlKv.js";import"./scrollIntoView-fZBPi3kj.js";import"./SelectionIndicator-DYhuORWP.js";import"./SelectionManager-BMfttRP9.js";import"./useEvent-DJ2zukRQ.js";import"./useDescription-FN-9a8Gv.js";import"./inertValue-n2EE9Ar_.js";import"./useHighlightSelectionDescription-BeBNIn8_.js";import"./useUpdateEffect-3zUkRXnj.js";import"./ListKeyboardDelegate-D5_-PZiv.js";import"./useHasTabbableChild-DycU9g0K.js";import"./Checkbox-Cr3SU3GM.js";import"./Form-CVVOpC8n.js";import"./check-C4EPAixs.js";import"./useToggleState-BDLT-wKB.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
