import{r as m,f as l,j as t}from"./iframe-CxaG9I7P.js";import{S as d}from"./SearchField-3RoDqXzl.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CG8tOhdT.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BJUuheTr.js";import"./utils-Czlm0UBK.js";import"./useLocalizedStringFormatter-BKXqtz3g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-TBgMuNXT.js";import"./useFocusRing-B_8tQUZZ.js";import"./index-t5CRhWba.js";import"./index-C83Nl3_M.js";import"./useFormValidation-1UvULbqT.js";import"./useField-eXjHNk9f.js";import"./Button-CmgJ4xb0.js";import"./Hidden-C8k63pZ_.js";import"./useLabels-Q9h_GLhy.js";import"./useButton-BF83G0Tr.js";import"./search-BPx7zwyH.js";import"./createLucideIcon-Bvlak_27.js";import"./ClearButton-Clo2sCtA.js";import"./Button-CzqSm8W5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcPkzblS.js";import"./VisuallyHidden-C45-MbEO.js";import"./x-CeZp12Sq.js";import"./FieldError-C4Y2gpA2.js";import"./Text-B1ar5pgm.js";import"./Text-Bsr9FprL.js";import"./RSPContexts-CqSw1FEj.js";import"./Collection-D-DLhQ9U.js";import"./index-3NXgPggs.js";import"./DragAndDrop-Dpbzm0Xt.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B6rWNH3A.js";import"./SelectionManager-CeziSyDL.js";import"./useEvent-DnFFUpVr.js";import"./useDescription-Bku4Pvc9.js";import"./inertValue-Bu42HiLz.js";import"./useHighlightSelectionDescription-CIhSqmB4.js";import"./useUpdateEffect-CwgQh4nB.js";import"./ListKeyboardDelegate-BlrHGTdI.js";import"./useHasTabbableChild-CYYBqvE8.js";import"./Checkbox-DcFZl-qF.js";import"./Form-BP8EURmm.js";import"./check-C99l1nb6.js";import"./useToggleState-BzwvRsCu.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
