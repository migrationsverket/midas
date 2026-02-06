import{r as m,f as l,j as t}from"./iframe-uZkJ1fJG.js";import{S as d}from"./SearchField-d81IuCIy.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CVIasGI1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cr8mehV-.js";import"./utils-Bql2fpyW.js";import"./useLocalizedStringFormatter-BmHqoQ62.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-bl1JDDeB.js";import"./useFocusRing-DaTXuR1t.js";import"./index-n8hdgtys.js";import"./index-B9xkxF8M.js";import"./useFormValidation-D37evYkq.js";import"./useField-NLOOn1cb.js";import"./Button-wtboOTdT.js";import"./Hidden-D9iAREQW.js";import"./useLabels-C8qvnydK.js";import"./useButton-B1lGnkCE.js";import"./search-E_qbF8Mo.js";import"./createLucideIcon-DACNTlAl.js";import"./ClearButton-BbJ7SYp8.js";import"./Button-DXAvfZt_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CxCN2hvr.js";import"./VisuallyHidden-CZMMqkul.js";import"./x-7qMG5WbC.js";import"./FieldError-CNz8C0Mw.js";import"./Text-ClpReuqT.js";import"./Text-D4eTnBnq.js";import"./RSPContexts-DFcqcjFx.js";import"./Collection-Cc352SrR.js";import"./index-iUw-gvy4.js";import"./DragAndDrop-CtWLhPR3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CWeNhkgP.js";import"./SelectionManager-aHBXooaK.js";import"./useEvent-BrJvnBOp.js";import"./useDescription-BpjeHAcD.js";import"./inertValue-DlE8wqgE.js";import"./useHighlightSelectionDescription-Cksk7ZI-.js";import"./useUpdateEffect-BYaQzIvu.js";import"./ListKeyboardDelegate-CJBMhtBR.js";import"./useHasTabbableChild-BWuuKN93.js";import"./Checkbox-CSkRDfz4.js";import"./Form-BNWWFyYj.js";import"./check-C9yMFlvN.js";import"./useToggleState-BCbGSezm.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
