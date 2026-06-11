import{r as m,f as l,j as t}from"./iframe-DP3vvJW_.js";import{S as d}from"./SearchField-zrP86Oov.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-lu5KQsqV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DeQRcX3I.js";import"./clsx-B-dksMZM.js";import"./Form-By5_t82Q.js";import"./useFocusRing-CT4t16Bn.js";import"./index-nwZ9FQBx.js";import"./index-B0BlSEXc.js";import"./Input-B9oFuB3W.js";import"./Hidden-0kVxHtHC.js";import"./Button-Cm4-ITis.js";import"./useLabel-BkKpedFS.js";import"./useLabels-DjnDZU9d.js";import"./useButton-BtKEagUR.js";import"./FieldError-Bmtmc6Ue.js";import"./Text-COCpEZrG.js";import"./clsx-Ciqy0D92.js";import"./Text-CdS1c328.js";import"./RSPContexts-BPYDVhoO.js";import"./Group-cz4Xi5QE.js";import"./useControlledState-B3z4I1hz.js";import"./useLocalizedStringFormatter-CDrhnNBu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D5Jyyd4s.js";import"./useField-CCf3XAps.js";import"./TextField.module-DdivwlC8.js";import"./search-PjahLRha.js";import"./createLucideIcon-Deup7nCX.js";import"./x-DF0EZiF0.js";import"./useLocalizedStringFormatter-FpMcBaq8.js";import"./Button-CqcFgrq0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ohAQh_Nb.js";import"./Collection-Dad9EmoV.js";import"./index-BC044ghQ.js";import"./DragAndDrop-D_hP7FFC.js";import"./getScrollParent-DKQ_TpWj.js";import"./scrollIntoView-C9R--iDG.js";import"./SelectionIndicator-BRvYQOhy.js";import"./SelectionManager-boEt2-9H.js";import"./useEvent-KPlZMkuH.js";import"./useDescription-ChOnG5Gy.js";import"./inertValue-BhWO4pkY.js";import"./useHighlightSelectionDescription-DLoylMH6.js";import"./useUpdateEffect-BicW3JmJ.js";import"./ListKeyboardDelegate-B74dJT2P.js";import"./useHasTabbableChild-BAj4kIJ0.js";import"./Checkbox-CxRIU1tL.js";import"./check-DLyREv7d.js";import"./useToggleState-CrlmJhkn.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
