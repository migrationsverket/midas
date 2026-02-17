import{r as m,f as l,j as t}from"./iframe-BpM72smZ.js";import{S as d}from"./SearchField-BugKn6Qp.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DUaY12Qp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-uArUOdKs.js";import"./utils-CSddBXAp.js";import"./useLocalizedStringFormatter-BjnJAUau.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D5BmevWh.js";import"./useFocusRing-B6IWB5Bj.js";import"./index-B1wLjkVC.js";import"./index-D8NVrDNK.js";import"./useFormValidation-CSg5xMEa.js";import"./useField-BGaaNjBC.js";import"./Button-7Fdf0MuP.js";import"./Hidden-CTCJ1xpV.js";import"./useLabels-Ea9VM8la.js";import"./useButton--NSdMDnV.js";import"./search-CpWmTa9y.js";import"./createLucideIcon-CC1B6wl6.js";import"./ClearButton-GaXCoWI-.js";import"./Button-DN_yypM1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-tgvWDsgd.js";import"./VisuallyHidden-DUZEOl0B.js";import"./x-Dk78go1P.js";import"./FieldError-B0e9S7Wf.js";import"./Text-DmFT7SRM.js";import"./Text-CSnhZWSM.js";import"./RSPContexts-D1rmZtkk.js";import"./Collection-ND38OKSz.js";import"./index-DKxQIn9a.js";import"./DragAndDrop-D2-uPOCN.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DF3FxvI0.js";import"./SelectionManager-BHK_Z65C.js";import"./useEvent-CMTJTOYm.js";import"./useDescription-B07oMV39.js";import"./inertValue-C0W4utbr.js";import"./useHighlightSelectionDescription-C2Z69wAd.js";import"./useUpdateEffect-C5jdWMwh.js";import"./ListKeyboardDelegate-pLN-qXGz.js";import"./useHasTabbableChild-D0x_py2J.js";import"./Checkbox-8kNPtuLS.js";import"./Form-FPFt4zkx.js";import"./check-B9Yb0FMt.js";import"./useToggleState-CHiz6xLs.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
