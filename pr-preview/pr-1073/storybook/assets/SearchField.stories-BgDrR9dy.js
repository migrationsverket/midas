import{r as m,f as l,j as t}from"./iframe-CeCAp685.js";import{S as d}from"./SearchField-CFntI9XV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-bbV9yTxY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-B0rcsDrm.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dps_NbAf.js";import"./utils-COZ-VSjk.js";import"./useLocalizedStringFormatter-DDDWDqSE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B1f4LkBQ.js";import"./useFocusRing-Bh0QYcZA.js";import"./index-NSorO2Ba.js";import"./index-BRisY6m3.js";import"./useFormValidation-C4KFIaMR.js";import"./useField-B0v1Y4ts.js";import"./Button-0wuCXx93.js";import"./Hidden-DL0LnJvP.js";import"./useLabels-Dg5MFTni.js";import"./useButton-MOpcSjMV.js";import"./search-CW4jy53L.js";import"./createLucideIcon-DSHxLsIU.js";import"./ClearButton-CGBkPO4V.js";import"./Button-DO76dX9X.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiwTvhuf.js";import"./VisuallyHidden-C9bjb32j.js";import"./x-D2ttmjes.js";import"./FieldError-aZ4tQBIh.js";import"./Text-OHvhFpdo.js";import"./Text-BD2V775c.js";import"./RSPContexts-CyFxiidX.js";import"./Collection-KDzXr54v.js";import"./index-BAAd046U.js";import"./DragAndDrop-DodaskbG.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D8WnGrhr.js";import"./SelectionManager-0GA5VoNT.js";import"./useEvent-teEO8Cf_.js";import"./useDescription-B3frf935.js";import"./inertValue-D50T9u6Z.js";import"./useHighlightSelectionDescription-Dz1QY_1D.js";import"./useUpdateEffect-Bi04d4kL.js";import"./ListKeyboardDelegate-vJRFFTIb.js";import"./useHasTabbableChild-DgCYbZhG.js";import"./Checkbox-FeYQTn4F.js";import"./Form-ClAmGACA.js";import"./check-B-YM1pmN.js";import"./useToggleState-CiCnxlXe.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
