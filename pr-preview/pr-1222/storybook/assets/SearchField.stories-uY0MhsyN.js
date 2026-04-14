import{r as m,f as l,j as t}from"./iframe-DgC-Ldrx.js";import{S as d}from"./SearchField-4KlN0NWX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DY2ucvK1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BUpv-0tc.js";import"./clsx-B-dksMZM.js";import"./Form-ynRyQGu4.js";import"./useFocusRing-dqGFuQw5.js";import"./index-N9gKTxLp.js";import"./index-Dh-_B1o5.js";import"./Input-DJXDnrG2.js";import"./Hidden-B6xJ_9IQ.js";import"./Button-eOYMOt-9.js";import"./useLabel-BjQqLo5U.js";import"./useLabels-DdUViYlU.js";import"./useButton-D1S_DcDn.js";import"./FieldError-DZZcZZwp.js";import"./Text-DBf5U8p7.js";import"./clsx-Ciqy0D92.js";import"./Text-FIGzZLpV.js";import"./RSPContexts-CrNZT_wF.js";import"./Group-8NEZM85t.js";import"./useControlledState-9EeHrS1X.js";import"./useLocalizedStringFormatter-Cy9GHfDn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CdmC9FlC.js";import"./useField-DStHgBoo.js";import"./TextField.module-DdivwlC8.js";import"./search-BEqpWOue.js";import"./createLucideIcon-Dct_wYt8.js";import"./x-6ABgZAjN.js";import"./useLocalizedStringFormatter-CU_Lgw4A.js";import"./Button-C6c-eprm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CY4Z8bfN.js";import"./Collection-DeYQIrew.js";import"./index-BYtlB0jv.js";import"./DragAndDrop-D4sYxzfj.js";import"./getScrollParent-DXMGajJM.js";import"./scrollIntoView-DEmmCe3n.js";import"./SelectionIndicator-DEwQOY4-.js";import"./SelectionManager-wmppj9Sm.js";import"./useEvent-CzHW2e8Z.js";import"./useDescription-DelY62ZZ.js";import"./inertValue-BRPVsafS.js";import"./useHighlightSelectionDescription-Cdg-6vNg.js";import"./useUpdateEffect-Cs9zAJAO.js";import"./ListKeyboardDelegate-CMZUMn_O.js";import"./useHasTabbableChild-CMyO26AR.js";import"./Checkbox-CfUSKt1b.js";import"./check-CytwJyM2.js";import"./useToggleState-Dkixnt0E.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
