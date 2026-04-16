import{r as m,f as l,j as t}from"./iframe-Xm_9cv73.js";import{S as d}from"./SearchField-BHFepfsZ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BS-UMJX0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BrYTleyQ.js";import"./clsx-B-dksMZM.js";import"./Form-bvdt1e3R.js";import"./useFocusRing-B1Kohi3p.js";import"./index-Cjq5DljI.js";import"./index-B7N2Cx5U.js";import"./Input-Bkd8beF6.js";import"./Hidden-BZlSwNP_.js";import"./Button-DVfOBJT3.js";import"./useLabel-DzdXQuC_.js";import"./useLabels-C-FgVELl.js";import"./useButton-BE-XYmko.js";import"./FieldError-DghDJU9N.js";import"./Text-83WNws37.js";import"./clsx-Ciqy0D92.js";import"./Text-C4UzyOu1.js";import"./RSPContexts-D8VaqtGQ.js";import"./Group-CCaYHNjE.js";import"./useControlledState-B_fJsoKU.js";import"./useLocalizedStringFormatter-Df4Fg5xM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DhuoEbb8.js";import"./useField-CVw2OaLJ.js";import"./TextField.module-DdivwlC8.js";import"./search-DucWg2ht.js";import"./createLucideIcon-9sC3-GJ0.js";import"./x-CXw9u6Gz.js";import"./useLocalizedStringFormatter-DWIBY6KU.js";import"./Button-Da8bQidF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BGkpKKxN.js";import"./Collection-DrnWUacn.js";import"./index-BdyOfa6A.js";import"./DragAndDrop-ImF7Ht3y.js";import"./getScrollParent-DW5MB0xc.js";import"./scrollIntoView-DLCl9E_L.js";import"./SelectionIndicator-DtMeBzWu.js";import"./SelectionManager-CkZyscrj.js";import"./useEvent-IJcG7rNp.js";import"./useDescription-jUlzP2-m.js";import"./inertValue-CXOxFAAq.js";import"./useHighlightSelectionDescription-BKIL3Ht-.js";import"./useUpdateEffect-ZJhMBJ1t.js";import"./ListKeyboardDelegate-Bo3okK2V.js";import"./useHasTabbableChild-Cgri4zyy.js";import"./Checkbox-D5Czp1TX.js";import"./check-DrZx5Lm6.js";import"./useToggleState-BcwzjPtu.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
