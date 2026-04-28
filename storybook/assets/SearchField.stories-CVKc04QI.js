import{r as m,f as l,j as t}from"./iframe-Ft30p-9G.js";import{S as d}from"./SearchField-BLSruD-M.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C0K0gVdM.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-9foVijX8.js";import"./clsx-B-dksMZM.js";import"./Form-Bj-ULx6B.js";import"./useFocusRing-Daa2jsSP.js";import"./index-xpQNWkGI.js";import"./index-Cc81j565.js";import"./Input-BGurIZni.js";import"./Hidden-BvmG-LpB.js";import"./Button-C-EJ5lIE.js";import"./useLabel-BF5tAiqY.js";import"./useLabels-Dd0Yyu-4.js";import"./useButton-jc4sCZEH.js";import"./FieldError-DXrI8o23.js";import"./Text-FkyfMeaB.js";import"./clsx-Ciqy0D92.js";import"./Text-C3E5lXGF.js";import"./RSPContexts-c5guVd-d.js";import"./Group-w47T-z_V.js";import"./useControlledState-BoeB8-LH.js";import"./useLocalizedStringFormatter-Bn-aGXyh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BN-yaNMF.js";import"./useField-DK19wDNW.js";import"./TextField.module-DdivwlC8.js";import"./search-Ch3x1l0Z.js";import"./createLucideIcon-D4F6iW4h.js";import"./x-DG1ChVHS.js";import"./useLocalizedStringFormatter-BWzTIlWv.js";import"./Button-CEZ1lvwe.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BmzQFOM6.js";import"./Collection-B5Vl67r5.js";import"./index-DG6iaBfL.js";import"./DragAndDrop-DypFwdt4.js";import"./getScrollParent-D-S2JtE9.js";import"./scrollIntoView-DnLyLCcJ.js";import"./SelectionIndicator-CvaKVrwY.js";import"./SelectionManager-BCfuDrZc.js";import"./useEvent-D1GkMq6I.js";import"./useDescription-Bw7Qhe2x.js";import"./inertValue-BNWBwaOP.js";import"./useHighlightSelectionDescription-CirQ6mqa.js";import"./useUpdateEffect-CH1GfMA0.js";import"./ListKeyboardDelegate-M7dQ7t4z.js";import"./useHasTabbableChild-BRGz9Llt.js";import"./Checkbox-CFUzcWP8.js";import"./check-B7eSI78P.js";import"./useToggleState-nxDL7cn9.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
