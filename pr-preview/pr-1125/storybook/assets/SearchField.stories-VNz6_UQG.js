import{r as m,f as l,j as t}from"./iframe-XSOdna7V.js";import{S as d}from"./SearchField-B-c7FBHM.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bu5ML2Xo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQ1sxQ0q.js";import"./clsx-B-dksMZM.js";import"./Form-CTWBlxaD.js";import"./useFocusRing-BwnMuBvC.js";import"./index-Nnd_sr_d.js";import"./index-CkxN_ckL.js";import"./Input-D6C9Havz.js";import"./Hidden-DgkiT7h9.js";import"./Button-Ds4pD6-3.js";import"./useLabels-W70u1liP.js";import"./useButton-CLu9KC4S.js";import"./FieldError-DJsWyzRR.js";import"./Text-DyMLbB4z.js";import"./clsx-Ciqy0D92.js";import"./Text-BAQEtY4I.js";import"./RSPContexts-BflBX7gr.js";import"./Group-B_XDYp0_.js";import"./useControlledState-BswRF_WI.js";import"./useLocalizedStringFormatter-Pfz8vAph.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BeCoWKec.js";import"./useField-C6pHhndQ.js";import"./TextField.module-DdivwlC8.js";import"./search-BEGurdNW.js";import"./createLucideIcon-DBCz1Yzx.js";import"./x-BLcWfDLX.js";import"./useLocalizedStringFormatter-BcWjRhxv.js";import"./Button-C9mugSTA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CsIt9SGg.js";import"./Collection-C6_anv2_.js";import"./index-CXWXM-zz.js";import"./DragAndDrop-DubuIKXJ.js";import"./getScrollParent-C4lNdL8d.js";import"./scrollIntoView-CgGayU5o.js";import"./SelectionIndicator-C7LxRp4_.js";import"./SelectionManager-BigimJCm.js";import"./useEvent-hkKHp_Kw.js";import"./useDescription-DahbeNS8.js";import"./inertValue-CyYxPbHq.js";import"./useHighlightSelectionDescription-BFWt4-pn.js";import"./useUpdateEffect-8imnv0QX.js";import"./ListKeyboardDelegate-CnCFrhkN.js";import"./useHasTabbableChild-vS2_729f.js";import"./Checkbox-mT16KDBS.js";import"./check-FOH42qvi.js";import"./useToggleState-LdAkRK5y.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
