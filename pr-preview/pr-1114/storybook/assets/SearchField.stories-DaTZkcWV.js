import{r as m,f as l,j as t}from"./iframe-BMuIqf2U.js";import{S as d}from"./SearchField-D9IvaIBM.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BP-ISE4u.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CzLgQND9.js";import"./clsx-B-dksMZM.js";import"./Form-AZXoGIRv.js";import"./useFocusRing-DrTSxcZR.js";import"./index-DrkjSw_E.js";import"./index-BzHeAC17.js";import"./Input-C5dbbndU.js";import"./Hidden-D30GFtt0.js";import"./Button-DOK0QqgZ.js";import"./useLabels-DL2LM1pj.js";import"./useButton-BIdZHsA8.js";import"./FieldError-BYsndT3-.js";import"./Text-CDpvKUAe.js";import"./clsx-Ciqy0D92.js";import"./Text-Yadq2hZ1.js";import"./RSPContexts-g3J5QWBf.js";import"./Group-DpYibYIB.js";import"./useControlledState-DRATP7Vg.js";import"./useLocalizedStringFormatter-hZHAja5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CmaI2bBi.js";import"./useField-BVB_nZx5.js";import"./TextField.module-DdivwlC8.js";import"./search-DEb1JrRO.js";import"./createLucideIcon-CEUfukBy.js";import"./x-BI9V4c-g.js";import"./useLocalizedStringFormatter-W3lFtewy.js";import"./Button-BsMPKC4Q.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BPe22ZQU.js";import"./Collection-CiDwrQ8E.js";import"./index-BRC2iNSA.js";import"./DragAndDrop-BJ6Cij33.js";import"./getScrollParent-DjDKJ7cH.js";import"./scrollIntoView-CjK1TPSG.js";import"./SelectionIndicator-CGmI1Kc3.js";import"./SelectionManager-C_GaywSa.js";import"./useEvent-Dau9qK9n.js";import"./useDescription-C7IYof9s.js";import"./inertValue-KRrhQQzt.js";import"./useHighlightSelectionDescription-BIbrQY9s.js";import"./useUpdateEffect-ErlhIkHw.js";import"./ListKeyboardDelegate-0qm8FZcz.js";import"./useHasTabbableChild-nub01m5t.js";import"./Checkbox-pZklRRRF.js";import"./check-CUqhNvMn.js";import"./useToggleState-xiSYYfWE.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
