import{r as m,f as l,j as t}from"./iframe-CfD08JHH.js";import{S as d}from"./SearchField-nh9zxy93.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BrNjMAD0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-qZuV6rTK.js";import"./utils-D9GPP0o0.js";import"./useLocalizedStringFormatter-BtUZDJNi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-pzmZVcRA.js";import"./useFocusRing-DbZlBvT3.js";import"./index-CkGKPUJ7.js";import"./index-Bb2OgbnK.js";import"./useFormValidation-D39AauB2.js";import"./useField-C6N5VUN_.js";import"./Button-CxMmpQq_.js";import"./Hidden-_wiLvPg0.js";import"./useLabels-B8yJmO2W.js";import"./useButton-BtewcnCZ.js";import"./search-CDwTgC5k.js";import"./createLucideIcon-DPrY6SpC.js";import"./ClearButton-BvL89idu.js";import"./Button-BDhh5PYr.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DgtxZ7Zy.js";import"./VisuallyHidden-CyIL-gS9.js";import"./x-BxwHOpJf.js";import"./FieldError-BgTli7tr.js";import"./Text-CrZg_N--.js";import"./Text-DobS2R06.js";import"./RSPContexts-DzlmE6Vu.js";import"./Collection-CIMmwsxn.js";import"./index-cRxFTsXn.js";import"./DragAndDrop-DdRuKhE4.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DFhcN9II.js";import"./SelectionManager-jZG-N2MR.js";import"./useEvent-CFcLw1G-.js";import"./useDescription-M-hiH2ur.js";import"./inertValue-B9H5mPwN.js";import"./useHighlightSelectionDescription-DMAh3XKg.js";import"./useUpdateEffect-B0vZKv3a.js";import"./ListKeyboardDelegate-B6JGmauI.js";import"./useHasTabbableChild-C4bgb0Xy.js";import"./Checkbox-tEK-BLGt.js";import"./Form-CxynQJgr.js";import"./check-Mr0_gEbL.js";import"./useToggleState-D6eSFPU-.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
