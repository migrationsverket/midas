import{r as m,f as l,j as t}from"./iframe-BjXHvzLV.js";import{S as d}from"./SearchField-Cf8wnGjR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bmq2pASC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-5N7ivM8O.js";import"./utils-C7TofeRY.js";import"./useLocalizedStringFormatter-B09DX6oS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Blk9AjE8.js";import"./useFocusRing-ChtlY4t2.js";import"./index-c1mE3GS_.js";import"./index-fRYLtIJx.js";import"./useFormValidation-Y1s-UN3t.js";import"./useField-D1LWWz2e.js";import"./Button-D655U3jT.js";import"./Hidden-CwrmmuBw.js";import"./useLabels-CBgCNECm.js";import"./useButton-DTsHOwZn.js";import"./search-DOAkTWxP.js";import"./createLucideIcon-BMYiFBuo.js";import"./ClearButton-CZyeRT6W.js";import"./Button-Ck6rrEvj.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DGt-YCd6.js";import"./VisuallyHidden-DEnBWTBz.js";import"./x-B15mToM9.js";import"./FieldError-BRuLTmCO.js";import"./Text-G6RzhBRh.js";import"./Text-B60LJh84.js";import"./RSPContexts-By0c3k33.js";import"./Collection-eZGfFs1q.js";import"./index-Dd1fS_zB.js";import"./DragAndDrop-C5Op6r1s.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BpO8vjo0.js";import"./SelectionManager-_yI7h9H0.js";import"./useEvent-bA9CQz3i.js";import"./useDescription-69qIWb5l.js";import"./inertValue-CX1YBJ2e.js";import"./useHighlightSelectionDescription-AO_8xFb5.js";import"./useUpdateEffect-ZPe6igQ_.js";import"./ListKeyboardDelegate-Cr_75rG2.js";import"./useHasTabbableChild-orkkqmQK.js";import"./Checkbox-Cv1TdB5Y.js";import"./Form-DkVw-cHI.js";import"./check-yZX-Nib_.js";import"./useToggleState-DsoT0mbF.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
