import{r as m,f as l,j as t}from"./iframe-CWDqI9As.js";import{S as d}from"./SearchField-Cl75hlgO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BfrXxIkb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-dBjUBpAV.js";import"./clsx-B-dksMZM.js";import"./Form-Bi-96Kx0.js";import"./useFocusRing-CGI_ER4d.js";import"./index-BPbsZXYC.js";import"./index-B9h6eKZl.js";import"./Input-Cd4gARcs.js";import"./Hidden-Cgjt9oWa.js";import"./Button-ChgRUqyy.js";import"./useLabel-BVrFk9UL.js";import"./useLabels-BvpY06Hn.js";import"./useButton-C4i5Q2ts.js";import"./FieldError-BFTOWK8w.js";import"./Text-CNhsvp3k.js";import"./clsx-Ciqy0D92.js";import"./Text-Bg0gZzcQ.js";import"./RSPContexts-BANsKMWb.js";import"./Group-EJLZZM0Q.js";import"./useControlledState-7TZpR_sr.js";import"./useLocalizedStringFormatter-BpizLsAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BMHVb6gN.js";import"./useField-C8fPh8Wl.js";import"./TextField.module-DdivwlC8.js";import"./search-Dk47oInf.js";import"./createLucideIcon-CQ9K894w.js";import"./x-CzmzQROS.js";import"./useLocalizedStringFormatter-CoCxcMtj.js";import"./Button-CT52BdlE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CSPSoyjM.js";import"./Collection-BCFGKp7k.js";import"./index-CQlCIbRD.js";import"./DragAndDrop-BYGbpFn5.js";import"./getScrollParent-_UwOfSKS.js";import"./scrollIntoView-CWyOkl1L.js";import"./SelectionIndicator-SU9AKZhk.js";import"./SelectionManager-CRbMuRcS.js";import"./useEvent-Cr5dRUc0.js";import"./useDescription-DPaZj1pb.js";import"./inertValue-CG3IsiG3.js";import"./useHighlightSelectionDescription-D62j4h7n.js";import"./useUpdateEffect-BxR7Ys3d.js";import"./ListKeyboardDelegate-DfYbDCAE.js";import"./useHasTabbableChild-BDR4dNN2.js";import"./Checkbox-DOk-NWfX.js";import"./check-D8HLpIE6.js";import"./useToggleState-D7dkoKRz.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
