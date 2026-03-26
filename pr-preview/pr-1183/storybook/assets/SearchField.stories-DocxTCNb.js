import{r as m,f as l,j as t}from"./iframe-BsX4-fHl.js";import{S as d}from"./SearchField-BXTkB3Fq.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DQEfSjEN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-WmpgZI0L.js";import"./clsx-B-dksMZM.js";import"./Form-4piklxqR.js";import"./useFocusRing-DHGOOITS.js";import"./index--eTuDDLm.js";import"./index-8LgWGc9O.js";import"./Input-DD6RnW7N.js";import"./Hidden-Du6MB-px.js";import"./Button-mui9UUMM.js";import"./useLabel-C3_xLHTN.js";import"./useLabels-DE2ohQQR.js";import"./useButton-bzYxxfaT.js";import"./FieldError-HDj_VpLo.js";import"./Text-BO6cVHx4.js";import"./clsx-Ciqy0D92.js";import"./Text-AfY7AoQf.js";import"./RSPContexts-BsBjgKsl.js";import"./Group-DlBgbd63.js";import"./useControlledState-1XtDDM6q.js";import"./useLocalizedStringFormatter-D_5fwse8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BEbEcOue.js";import"./useField-CewvwuqF.js";import"./TextField.module-DdivwlC8.js";import"./search-MshCcg2B.js";import"./createLucideIcon-lE9BzsE-.js";import"./x-BRKCJtiN.js";import"./useLocalizedStringFormatter-tfIgws8_.js";import"./Button-BTWfCVSc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BUS8JXkv.js";import"./Collection-DVl1ojre.js";import"./index-gZsATta3.js";import"./DragAndDrop-CM6ngeov.js";import"./getScrollParent-DSKEhVJg.js";import"./scrollIntoView-DpHrXS9N.js";import"./SelectionIndicator-Bof2haaj.js";import"./SelectionManager-Bc5M-RvQ.js";import"./useEvent-CFNavKzw.js";import"./useDescription-DyxUU18y.js";import"./inertValue-RfshzP9Y.js";import"./useHighlightSelectionDescription-D33ALzZZ.js";import"./useUpdateEffect-CQ1oM-is.js";import"./ListKeyboardDelegate-DTw-pDRt.js";import"./useHasTabbableChild-D2Odh4N7.js";import"./Checkbox-DQ8F634X.js";import"./check-Z5J2Sexo.js";import"./useToggleState-D25htPF2.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
