import{r as m,f as l,j as t}from"./iframe-DWeimgIa.js";import{S as d}from"./SearchField-CAzV_XqV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-5k3wSp2F.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-HboVp0gd.js";import"./utils-DxMtLVOR.js";import"./useLocalizedStringFormatter-aKbmrIDP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CNcscrW3.js";import"./useFocusRing-DKnPpF37.js";import"./index-yvDfoLET.js";import"./index-Zv7Hv4yU.js";import"./useFormValidation-BVTCQTHB.js";import"./useField-BTFmLCge.js";import"./Button-BvEh5rbk.js";import"./Hidden-DKOEiJ1S.js";import"./useLabels-C5bIK2qD.js";import"./useButton-DqDFtivK.js";import"./search-xajySS6f.js";import"./createLucideIcon-BHfYKO9v.js";import"./ClearButton-BrFnQoZZ.js";import"./Button-77YGZ7IT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTWeQANG.js";import"./VisuallyHidden-DRBz7uUV.js";import"./x-DycnocmR.js";import"./FieldError-D4QojQoq.js";import"./Text-DbBhNbbj.js";import"./Text-CfprFU7e.js";import"./RSPContexts-CNnbePcK.js";import"./Collection-DwYHR0Vg.js";import"./index-DyeLdOPS.js";import"./DragAndDrop-jh8_CTmW.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CKDi98ip.js";import"./SelectionManager-i0o8PGpm.js";import"./useEvent-C4MlArKl.js";import"./useDescription-Bh7NSV4H.js";import"./inertValue-ZdK1815p.js";import"./useHighlightSelectionDescription-CHTqB1Q5.js";import"./useUpdateEffect-B1PhQsZ3.js";import"./ListKeyboardDelegate-CY2YJj51.js";import"./useHasTabbableChild-CLLKtpbb.js";import"./Checkbox-H4_MEQuv.js";import"./Form-DKZEmQ_n.js";import"./check-CLCQ0_0I.js";import"./useToggleState-IhaYSV-h.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
