import{r as m,f as l,j as t}from"./iframe-BJoNrLOB.js";import{S as d}from"./SearchField-DYRc7MM2.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BWwBT0X-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DXjBUGo4.js";import"./utils-8eOeUZvs.js";import"./useLocalizedStringFormatter-Ck15hl-3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DvmZphOA.js";import"./useFocusRing-xf59S3G4.js";import"./index-TiYrZJQV.js";import"./index-BrwANR0V.js";import"./useFormValidation-MpE-MHxZ.js";import"./useField-BeLJlWfS.js";import"./Button-BoY_ExKw.js";import"./Hidden-CN18PH3U.js";import"./useLabels-Dsw7O8PH.js";import"./useButton-Dmh7lGXM.js";import"./search-l6486r1j.js";import"./createLucideIcon-BX3h9Owr.js";import"./ClearButton-CbhZI6or.js";import"./Button-C_BpUAF5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-elsdN5ae.js";import"./VisuallyHidden-Bokzl-n3.js";import"./x-DSXcAS6f.js";import"./FieldError-BeL_eVmM.js";import"./Text-Nm20Pdh1.js";import"./Text-CXbyhWc_.js";import"./RSPContexts-CCiC92U9.js";import"./Collection-D-wvIYwO.js";import"./index-CtHKFZnr.js";import"./DragAndDrop-CLuCRTW2.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B7MHA78e.js";import"./SelectionManager-C5N71AQX.js";import"./useEvent-B_iQ0eAu.js";import"./useDescription-BwTDoIfu.js";import"./inertValue-alUGdZ5W.js";import"./useHighlightSelectionDescription-BV-yb0K3.js";import"./useUpdateEffect-BsGHctbX.js";import"./ListKeyboardDelegate-CJschMJ8.js";import"./useHasTabbableChild-DN1weB3o.js";import"./Checkbox-Dwn2cg9I.js";import"./Form-Dl7Kj9Mq.js";import"./check-Bz3oVWhx.js";import"./useToggleState-nQMApmjz.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
