import{r as m,f as l,j as t}from"./iframe-BWxdoVbq.js";import{S as d}from"./SearchField-CIEWC9n6.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B3_YWfQo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-FuJuatlB.js";import"./utils-BnYb9Hw4.js";import"./useLocalizedStringFormatter-CqDQSu3W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DP8Mhr5R.js";import"./useFocusRing-DPldp525.js";import"./index-DG33oO9s.js";import"./index-DTDl1n2p.js";import"./useFormValidation-DNc0NnIZ.js";import"./useField-DHj-Ewwt.js";import"./Button-ccQsUA8n.js";import"./Hidden-Cxs9AA6g.js";import"./useLabels-CAVv4we_.js";import"./useButton-CdcPrfen.js";import"./search-CvXfzL66.js";import"./createLucideIcon-BPWVcFpY.js";import"./ClearButton-BFYJ2TWV.js";import"./Button-DObiC3sf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DEH2FHS3.js";import"./VisuallyHidden-Sp8_SWOf.js";import"./x-BJpOH67y.js";import"./FieldError-CxzGL3jS.js";import"./Text-dn5dCY6n.js";import"./Text-DGZxErjX.js";import"./RSPContexts-Dux4Wkx7.js";import"./Collection-2_PO0O5b.js";import"./index-D_mW35hG.js";import"./DragAndDrop-CL3LOqZF.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-oTm2G6Fh.js";import"./SelectionManager-CdbwfAoN.js";import"./useEvent-y-8iBWin.js";import"./useDescription-DgM0dtj0.js";import"./inertValue-CJ274lu9.js";import"./useHighlightSelectionDescription-DEY3zCd_.js";import"./useUpdateEffect-20oDDNkr.js";import"./ListKeyboardDelegate-DQTFuCE0.js";import"./useHasTabbableChild-Cc7R3Rqf.js";import"./Checkbox-NxbfHqUd.js";import"./Form-BPid_5N5.js";import"./check-l2j-1phP.js";import"./useToggleState-CTzyQdPw.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
