import{r as m,f as l,j as t}from"./iframe-B78wn1WG.js";import{S as d}from"./SearchField-BwtFxwkx.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Br_NST-E.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-hc0v7KHB.js";import"./utils-RTE5txou.js";import"./useLocalizedStringFormatter-Da4CZSyZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-66VUwVkb.js";import"./useFocusRing-C06DFN8b.js";import"./index-2xn9MPia.js";import"./index-oZtTg3tM.js";import"./useFormValidation-DjwK84Yp.js";import"./useField-BZ6Bn88N.js";import"./Button-Dj90Y4Eb.js";import"./Hidden-Dmy_tbtO.js";import"./useLabels-eN7I3lmh.js";import"./useButton-D0ftkHxr.js";import"./search-Cuh35NGf.js";import"./createLucideIcon-De6jokFF.js";import"./ClearButton-CNZd8HPL.js";import"./Button-C_05nidj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DLBhvH3W.js";import"./VisuallyHidden-nx3fwYPE.js";import"./x-E1o5LEs9.js";import"./FieldError-BWFa-LBr.js";import"./Text-DhYauZPs.js";import"./Text-CI45cqHe.js";import"./RSPContexts-gOljqF4f.js";import"./Collection-DsNNavxH.js";import"./index-Bgt_Qwum.js";import"./DragAndDrop-BXb2nyjA.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-0X1b94tQ.js";import"./SelectionManager-Bp1Fa3PG.js";import"./useEvent-C5Pl_19e.js";import"./useDescription-DCMvsgkK.js";import"./inertValue-Dfz2L_2H.js";import"./useHighlightSelectionDescription-CSHoRTZu.js";import"./useUpdateEffect-JbyTIYnp.js";import"./ListKeyboardDelegate-BCvRBiIP.js";import"./useHasTabbableChild-D9L7169E.js";import"./Checkbox-OlOqem2t.js";import"./Form-BPVKSKvY.js";import"./check-DB--x2og.js";import"./useToggleState-BRrxB5sU.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
