import{r as m,f as l,j as t}from"./iframe-CU1z8ZWO.js";import{S as d}from"./SearchField-CJdkyPsz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CqH_HEnH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DVqGwfeZ.js";import"./clsx-B-dksMZM.js";import"./Form-DBPJ3l-c.js";import"./useFocusRing-Bwwpl-Rq.js";import"./index-I_kl0fWJ.js";import"./index-C-Y4ipn9.js";import"./Input-CU9pw7dH.js";import"./Hidden-N7huL-Y5.js";import"./Button-BdGWlDvU.js";import"./useLabel-D4QSJjhu.js";import"./useLabels-DWo5evaA.js";import"./useButton-BI7SC1MX.js";import"./FieldError-I8SPxjsf.js";import"./Text-YKX6wkOC.js";import"./clsx-Ciqy0D92.js";import"./Text-ChUFIC2p.js";import"./RSPContexts-CauR0OIy.js";import"./Group-BTX-dbq1.js";import"./useControlledState-CUj5ZMiu.js";import"./useLocalizedStringFormatter-CFmlUqTC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DDK0jYRD.js";import"./useField-BnC0fsgX.js";import"./TextField.module-DdivwlC8.js";import"./search-DGKPAjX2.js";import"./createLucideIcon-CaHhpyoi.js";import"./x-ChoXe0cH.js";import"./useLocalizedStringFormatter-Dvrj7zKe.js";import"./Button-DkJeYqVL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BrIjXOit.js";import"./Collection-CzqXpYks.js";import"./index-DMFDmPIt.js";import"./DragAndDrop-D3QKdU2T.js";import"./getScrollParent-xYS8wAXV.js";import"./scrollIntoView-BgxrN33L.js";import"./SelectionIndicator-BCZrxYeQ.js";import"./SelectionManager-DWS42UG-.js";import"./useEvent-Bq6uqUQY.js";import"./useDescription-CR7aQf8r.js";import"./inertValue-BDEkOqcH.js";import"./useHighlightSelectionDescription-D2naUYyX.js";import"./useUpdateEffect-Dr_k7Gbg.js";import"./ListKeyboardDelegate-CVJvgYEq.js";import"./useHasTabbableChild-CnXXMjUD.js";import"./Checkbox-BatUbd6C.js";import"./check-CZL280kl.js";import"./useToggleState-BcofYDQK.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
