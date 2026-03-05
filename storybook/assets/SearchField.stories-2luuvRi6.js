import{r as m,f as l,j as t}from"./iframe-DRiJSY7M.js";import{S as d}from"./SearchField-DBGEeBsg.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CR1VjQnj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BP1yiS2k.js";import"./utils-BJDSFOW5.js";import"./useLocalizedStringFormatter-BbfEnz-t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DZGYskYH.js";import"./useFocusRing-B6J0ruRj.js";import"./index-9zNSRqxn.js";import"./index-BQ1pxiFP.js";import"./useFormValidation-BivglJc0.js";import"./useField-DFiBvVn6.js";import"./Button-BUgilED8.js";import"./Hidden-qasJP2Cu.js";import"./useLabels-mUQxQX-2.js";import"./useButton-0YT_Gb4U.js";import"./search-BEchcDm7.js";import"./createLucideIcon-Dzsyexy7.js";import"./ClearButton-BYXNu9xY.js";import"./Button-G02mwiay.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CxYPA09E.js";import"./VisuallyHidden-K6FaPgYL.js";import"./x-CBVQBqGf.js";import"./FieldError-BjsiVnPf.js";import"./Text-X4vUYIPT.js";import"./Text-B3YlrlLH.js";import"./RSPContexts-BcxExNnK.js";import"./Collection-CddT2mwo.js";import"./index-DRVte7H4.js";import"./DragAndDrop-BS2zjWE6.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-FRXTPgjb.js";import"./SelectionManager-Ch8djR48.js";import"./useEvent-5R_vpykM.js";import"./useDescription-Bok8djC6.js";import"./inertValue-o-Z7zXPm.js";import"./useHighlightSelectionDescription-B2uV9OQu.js";import"./useUpdateEffect-DLhyns2e.js";import"./ListKeyboardDelegate-M0ueANy9.js";import"./useHasTabbableChild-C6pMCCt7.js";import"./Checkbox-17YHFN_w.js";import"./Form-Uq1sMBKN.js";import"./check-CwViVfvY.js";import"./useToggleState-BfFw1Mxq.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
