import{r as m,f as l,j as t}from"./iframe-D-p6dryC.js";import{S as d}from"./SearchField-Ca0sLBhY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D3ZbQuLB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BBjtOFIE.js";import"./utils-B-poXB9P.js";import"./useLocalizedStringFormatter-qTNGciRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CJXVy5JL.js";import"./useFocusRing-1dArzfdN.js";import"./index-DIakIQqk.js";import"./index-DkL1JqyI.js";import"./useFormValidation-DdWh0zdu.js";import"./useField-CgSVtjeX.js";import"./Button-BU7RNZRB.js";import"./Hidden-BoY54D8z.js";import"./useLabels-Djww4bwV.js";import"./useButton-BYxg0DiE.js";import"./search-CepONtjG.js";import"./createLucideIcon-DPKqS8th.js";import"./ClearButton-D8IHvh37.js";import"./Button-W-Uz8qez.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DBvUnH6s.js";import"./VisuallyHidden-jfhHFvLB.js";import"./x-DTawh0wA.js";import"./FieldError-CmYJRG-e.js";import"./Text-D7fRftcI.js";import"./Text-CMUqHi1g.js";import"./RSPContexts-i063sbcf.js";import"./Collection-BXpaJA4N.js";import"./index-BnT7g8Eo.js";import"./DragAndDrop-CYQgqspC.js";import"./getScrollParent-D3Nh5GEm.js";import"./scrollIntoView-CkrWhIra.js";import"./SelectionIndicator-wEHTqjRA.js";import"./SelectionManager-B2o_x42c.js";import"./useEvent-0pnQ-670.js";import"./useDescription-DAt4X-Ie.js";import"./inertValue-BJpviU8O.js";import"./useHighlightSelectionDescription-CbCWH2Ei.js";import"./useUpdateEffect-CGnoa8Sq.js";import"./ListKeyboardDelegate-CRMYwzxR.js";import"./useHasTabbableChild-g-cPNZRC.js";import"./Checkbox-xRs-jxDl.js";import"./Form-Hzjw-i4A.js";import"./check-BSDBGN_A.js";import"./useToggleState-C0iQawls.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
