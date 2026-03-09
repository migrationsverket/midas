import{r as m,f as l,j as t}from"./iframe-C7bjyZwM.js";import{S as d}from"./SearchField-C5kdTgQF.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-09TjLFex.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D62BjFgf.js";import"./utils-CIiQPwyX.js";import"./useLocalizedStringFormatter-BA72XhLM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DxO_Ht67.js";import"./useFocusRing-5twuRh50.js";import"./index-BcQ7-9aJ.js";import"./index-Dy0iqIGJ.js";import"./useFormValidation-BWm46lJU.js";import"./useField-CpAfE4lc.js";import"./Button-C2JLJi6L.js";import"./Hidden-aFyf7gu8.js";import"./useLabels-B0ZdbmeW.js";import"./useButton-JOi2-Sum.js";import"./search-D8a6F2y5.js";import"./createLucideIcon-C5pih5R6.js";import"./ClearButton-C_fpAgsA.js";import"./Button-B0ce8tXc.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRvjyLqR.js";import"./VisuallyHidden-B7bbQpVf.js";import"./x-nSKEkmzv.js";import"./FieldError-BXfQY4zD.js";import"./Text-BJaGdqWL.js";import"./Text-C5NeNGM2.js";import"./RSPContexts-CnvL7WZL.js";import"./Collection-6KqJKeYy.js";import"./index-BSvAKKIw.js";import"./DragAndDrop-xM5wExo7.js";import"./getScrollParent-BeyReYlz.js";import"./scrollIntoView-BhIbPiYG.js";import"./SelectionIndicator-Stz9YuR-.js";import"./SelectionManager-CvqFuJtb.js";import"./useEvent-B8VlZ3mC.js";import"./useDescription-CweaZgNC.js";import"./inertValue-D2BfLwqb.js";import"./useHighlightSelectionDescription-Bks8e2Qy.js";import"./useUpdateEffect-CRPY8_S0.js";import"./ListKeyboardDelegate-C5T3FD_h.js";import"./useHasTabbableChild-9POUsjQy.js";import"./Checkbox-CpTlznKz.js";import"./Form-v5sUP_bv.js";import"./check-mAf0TnwR.js";import"./useToggleState-BkLJVd_d.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
