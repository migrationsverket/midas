import{r as m,f as l,j as t}from"./iframe-CrvsXgmc.js";import{S as d}from"./SearchField-D35kmh1D.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DLXXuiQP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-gzCDVK3q.js";import"./clsx-B-dksMZM.js";import"./Form-bos5N932.js";import"./useFocusRing-Y3IR8t1i.js";import"./index-BMhhcqfp.js";import"./index-DzLz0lsv.js";import"./Input-DXCRAbnb.js";import"./Hidden-DAMs1NRQ.js";import"./Button-BJCsZZXs.js";import"./useLabel-MRD8p-bz.js";import"./useLabels-BpU9vMZ-.js";import"./useButton-BK6QZOGv.js";import"./FieldError-5hEdY4LM.js";import"./Text-CF9Q2mcX.js";import"./clsx-Ciqy0D92.js";import"./Text-CA7uWGGn.js";import"./RSPContexts-DH1zBAtU.js";import"./Group-BbSxKl7e.js";import"./useControlledState-CFUIREeB.js";import"./useLocalizedStringFormatter-CdYDGaj0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CLgkkZtp.js";import"./useField-ctyqcCoa.js";import"./TextField.module-DdivwlC8.js";import"./search-BFCzGOXO.js";import"./createLucideIcon-C4drZqEd.js";import"./x-_k-E3REV.js";import"./useLocalizedStringFormatter-CB9PjSb0.js";import"./Button-C1guSp-1.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-GavGRjxA.js";import"./Collection-DgAx05eF.js";import"./index-CXAqSaFB.js";import"./DragAndDrop-DmhbIFkL.js";import"./getScrollParent-DN_amqRA.js";import"./scrollIntoView-C_cKPCXn.js";import"./SelectionIndicator-o2cRMrjj.js";import"./SelectionManager-uwLQE_60.js";import"./useEvent-DI2Xn_Gs.js";import"./useDescription-Cw3L3Xvg.js";import"./inertValue-DWNYJmzE.js";import"./useHighlightSelectionDescription-gpSbmBc-.js";import"./useUpdateEffect-CA7I7uvS.js";import"./ListKeyboardDelegate-BxUpHfVv.js";import"./useHasTabbableChild-BCJrWiax.js";import"./Checkbox-BZUk4yn4.js";import"./check-CaH8XxLm.js";import"./useToggleState-71MHAyi2.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
