import{r as m,f as l,j as t}from"./iframe-D-t8l-nQ.js";import{S as d}from"./SearchField-C49qBQHv.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-IYDsOylR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D_vJ43oY.js";import"./utils-C09TX1Ea.js";import"./useLocalizedStringFormatter-Dt4C4rmW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-FxkGREDl.js";import"./useFocusRing-CR_o_Q9s.js";import"./index-BdqC0PhN.js";import"./index-csafQpnv.js";import"./useFormValidation-Bh4BmBOT.js";import"./useField-C1D7xTDh.js";import"./Button-Bv6XbooR.js";import"./Hidden-8h6Lngiq.js";import"./useLabels-BDhfzl9l.js";import"./useButton-ucD7gpk8.js";import"./search-BEaGf2hH.js";import"./createLucideIcon-CI-4TPo-.js";import"./ClearButton-pcJ1V683.js";import"./Button-CHG0rl3V.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BmdgiejR.js";import"./VisuallyHidden-CznJ6A2t.js";import"./x-D0A6-I5y.js";import"./FieldError-Nn4mt1Aj.js";import"./Text-CG0yYSyZ.js";import"./Text-D8XkFvPl.js";import"./RSPContexts-Bjm4deda.js";import"./Collection-BJ_XawYo.js";import"./index-EviCI9Dk.js";import"./DragAndDrop-CZEhJMcV.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C-3v6jXm.js";import"./SelectionManager-K7oo-nKh.js";import"./useEvent-D7sZf_Zj.js";import"./useDescription-DnttFM8m.js";import"./inertValue-gEabz47x.js";import"./useHighlightSelectionDescription-B9fCgYsQ.js";import"./useUpdateEffect-DSOd12sn.js";import"./ListKeyboardDelegate-DegdBO48.js";import"./useHasTabbableChild-B6kfidcD.js";import"./Checkbox-CxjOqhUF.js";import"./Form-B3WM99l_.js";import"./check-DeGdF_Nq.js";import"./useToggleState-CSo1bWyu.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
