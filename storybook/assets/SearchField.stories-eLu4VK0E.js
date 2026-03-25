import{r as m,f as l,j as t}from"./iframe-BGuMGxmc.js";import{S as d}from"./SearchField-BGud0tnM.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CVNAcXfY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ca8G7ZGu.js";import"./clsx-B-dksMZM.js";import"./Form-BbF92qNF.js";import"./useFocusRing-DJApir6W.js";import"./index-B9qsJJ_r.js";import"./index-CvgehkYp.js";import"./Input-B__HRY_B.js";import"./Hidden-Blt3qGK-.js";import"./Button-C3vJklaf.js";import"./useLabels-CUg_cq6I.js";import"./useButton-BJrbop6V.js";import"./FieldError-CrkbqQXw.js";import"./Text-D1Wivcto.js";import"./clsx-Ciqy0D92.js";import"./Text-X11QTVVP.js";import"./RSPContexts-CnYkPQTV.js";import"./Group-DZWeYlEJ.js";import"./useControlledState-7HU2cwdp.js";import"./useLocalizedStringFormatter-CJMbHzz3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DaevbFQ7.js";import"./useField-DD2NBLXV.js";import"./TextField.module-DdivwlC8.js";import"./search-upZkBXFE.js";import"./createLucideIcon-YpCIaABn.js";import"./x-DjU_SE9r.js";import"./useLocalizedStringFormatter-Bx3yadO6.js";import"./Button-ClNKt42i.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D0q9pbf-.js";import"./Collection-DE67HbN5.js";import"./index-PiVRGSsF.js";import"./DragAndDrop-BqGsrT_-.js";import"./getScrollParent-B6QXkZoK.js";import"./scrollIntoView-DUfrCx46.js";import"./SelectionIndicator-DuhzZcnq.js";import"./SelectionManager-GAh7yBJ1.js";import"./useEvent-B0xi010u.js";import"./useDescription-CkSrBGkd.js";import"./inertValue-DdEyOGCY.js";import"./useHighlightSelectionDescription-Ys_6ogps.js";import"./useUpdateEffect-GiDU_ueo.js";import"./ListKeyboardDelegate-C6e2aQfG.js";import"./useHasTabbableChild-rKO9nfYd.js";import"./Checkbox-B4LNcKeU.js";import"./check-DV08cCGb.js";import"./useToggleState-CmLJwS3Q.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
