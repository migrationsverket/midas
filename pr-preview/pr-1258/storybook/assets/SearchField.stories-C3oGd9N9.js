import{r as m,f as l,j as t}from"./iframe-CWlixrW_.js";import{S as d}from"./SearchField-BlLm8wMJ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DrxamUOn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CRaSuqNF.js";import"./clsx-B-dksMZM.js";import"./Form-DiqHwhIn.js";import"./useFocusRing-DDmLMMaV.js";import"./index-9FhWo1dj.js";import"./index-_BXH5tR9.js";import"./Input-BebCl7JJ.js";import"./Hidden-C139jkL0.js";import"./Button-kA2ued5f.js";import"./useLabel-DkzOQx4t.js";import"./useLabels-C00UR8Eo.js";import"./useButton-DQDkLrpI.js";import"./FieldError-BKAyDRlQ.js";import"./Text-oz4ou16d.js";import"./clsx-Ciqy0D92.js";import"./Text-CaYrS64L.js";import"./RSPContexts-D4D98plB.js";import"./Group-4GKF3_A1.js";import"./useControlledState-CzRWfzat.js";import"./useLocalizedStringFormatter-ViKOiGge.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6alrfwPS.js";import"./useField-Do_CZFfm.js";import"./TextField.module-DdivwlC8.js";import"./search-BMCm-RPq.js";import"./createLucideIcon-Ay7p0EQv.js";import"./x-BLTOENDc.js";import"./useLocalizedStringFormatter-BtK1NWhh.js";import"./Button-DHj3NF2u.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BQ6ylskT.js";import"./Collection-EO1AcQfg.js";import"./index-CFLy-5bI.js";import"./DragAndDrop-Df0h-GqS.js";import"./getScrollParent-DWEouMlM.js";import"./scrollIntoView-AfG37jOw.js";import"./SelectionIndicator-DtNX-UQ2.js";import"./SelectionManager-Be9sokqv.js";import"./useEvent-Ditv3QO5.js";import"./useDescription-DXpo-reC.js";import"./inertValue-O83hlq-m.js";import"./useHighlightSelectionDescription-DgZ8UG3u.js";import"./useUpdateEffect-BpZn1HUJ.js";import"./ListKeyboardDelegate-C63MTa-n.js";import"./useHasTabbableChild-CKmExKF4.js";import"./Checkbox-voyyUWTv.js";import"./check-BRtQddKv.js";import"./useToggleState-DqBscsn4.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
