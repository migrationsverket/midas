import{r as m,f as l,j as t}from"./iframe-CPtuJ8HO.js";import{S as d}from"./SearchField-BI76ETZD.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DBOcmHyn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CLvfzbin.js";import"./utils-Wu2XGcEF.js";import"./useLocalizedStringFormatter-MASyzKxf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BRBfHMXE.js";import"./useFocusRing-B2VzlZnk.js";import"./index-BRWS9LDr.js";import"./index-BOHm-TSr.js";import"./useFormValidation-Bpm9_0qx.js";import"./useField-Ds3Z5M45.js";import"./Button-ZJtGU8il.js";import"./Hidden-CqVIwIVB.js";import"./useLabels-BdTBLhcX.js";import"./useButton-Cj3FTjdJ.js";import"./search-DJvnKEXt.js";import"./createLucideIcon-CZ8AHqP_.js";import"./ClearButton-C8w37WXy.js";import"./Button-D3yQOAis.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BO2qvTML.js";import"./VisuallyHidden-BXwhVzS2.js";import"./x-59_pYRVt.js";import"./FieldError-DMwa18ms.js";import"./Text-Xck8zNqM.js";import"./Text-BHQtEdFP.js";import"./RSPContexts-eb7b9mtr.js";import"./Collection-XbEL7V6x.js";import"./index-CIORga0m.js";import"./DragAndDrop-DAjBq1xm.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSVB12IK.js";import"./SelectionManager-lQrsa-HY.js";import"./useEvent-Bq2H3CvS.js";import"./useDescription-CMX7WFxi.js";import"./inertValue-CQhbJ4k4.js";import"./useHighlightSelectionDescription-C57LVQ6X.js";import"./useUpdateEffect-DbP3Nkud.js";import"./ListKeyboardDelegate-gAR5iSK6.js";import"./useHasTabbableChild-Dk78nfN1.js";import"./Checkbox-BBqiq1vC.js";import"./Form-C5zBMOIx.js";import"./check-P5a3i4Np.js";import"./useToggleState-CNIveLR5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
