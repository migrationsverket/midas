import{r as m,f as l,j as t}from"./iframe-BI14_MVF.js";import{S as d}from"./SearchField-DLppYJct.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bz87lcGi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7wUKhFW.js";import"./utils-CUoFg1P-.js";import"./useLocalizedStringFormatter-BsyiUrEv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DVz2DBKg.js";import"./useFocusRing-C_drv0-d.js";import"./index-EBvLle30.js";import"./index-DjRcaABs.js";import"./useFormValidation-CI5p8J41.js";import"./useField-10jeCMxt.js";import"./Button-C1lGy2rc.js";import"./Hidden-fX2mzFJg.js";import"./useLabels-RkUsd7_h.js";import"./useButton-UXl7frIQ.js";import"./search-CBz9yeIb.js";import"./createLucideIcon-DENDzJzs.js";import"./ClearButton-BMYc0gMf.js";import"./Button-CeI3qDWP.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-SRb7twPp.js";import"./VisuallyHidden-CyW44Voa.js";import"./x-BV47LBd3.js";import"./FieldError-0gwuUdiP.js";import"./Text-CI44Yo6S.js";import"./Text-RJrnIXBc.js";import"./RSPContexts-BdlFwrnM.js";import"./Collection-CZ9Jc2KR.js";import"./index-D2lykJvQ.js";import"./DragAndDrop-Co_Ymsgl.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CJ9gdQ2K.js";import"./SelectionManager-BsrCfNRx.js";import"./useEvent-Cl7U-xPX.js";import"./useDescription-DRcfnO6m.js";import"./inertValue-DKZy1wGb.js";import"./useHighlightSelectionDescription-DD66OXCL.js";import"./useUpdateEffect-CnCqR5Q3.js";import"./ListKeyboardDelegate-B-MPQD6f.js";import"./useHasTabbableChild-BDVAn5Lw.js";import"./Checkbox-C5FLFpMH.js";import"./Form-CvFoCgv-.js";import"./check-BYRaeB6O.js";import"./useToggleState-TqaX5QDS.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
