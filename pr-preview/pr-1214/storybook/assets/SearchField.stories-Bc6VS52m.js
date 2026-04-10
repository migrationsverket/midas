import{r as m,f as l,j as t}from"./iframe--DNH3aGV.js";import{S as d}from"./SearchField-JlxxauQP.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-AS7opBuR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-0GaImV3w.js";import"./clsx-B-dksMZM.js";import"./Form-DPDs5zEL.js";import"./useFocusRing-COgihC8f.js";import"./index-BdkFEYWR.js";import"./index-DalW6cey.js";import"./Input-C3-sIc-5.js";import"./Hidden-DGctFygB.js";import"./Button-BsANfNMy.js";import"./useLabel-CkI0hnox.js";import"./useLabels-C8J0Cx0Y.js";import"./useButton-Cnfu5-B9.js";import"./FieldError-WqsNiK7P.js";import"./Text-BBvcfJf4.js";import"./clsx-Ciqy0D92.js";import"./Text-c4OCYkd3.js";import"./RSPContexts-D_qB4YUz.js";import"./Group-CRL_tLBo.js";import"./useControlledState-D7Iw9EWv.js";import"./useLocalizedStringFormatter-BrEpEIAl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C1_wCBkw.js";import"./useField-CEYiaukY.js";import"./TextField.module-DdivwlC8.js";import"./search-BKwL1yD-.js";import"./createLucideIcon-GK2uHeXX.js";import"./x-DQhZrA3s.js";import"./useLocalizedStringFormatter-DOUyl0Wg.js";import"./Button-k3ORVpm3.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CF-eQG1L.js";import"./Collection-c75W7817.js";import"./index-B8zmV9cI.js";import"./DragAndDrop-BnX4onGa.js";import"./getScrollParent-DKElYBV4.js";import"./scrollIntoView-B9vl4vKk.js";import"./SelectionIndicator-xlkanYoJ.js";import"./SelectionManager-DX4q2rcR.js";import"./useEvent-CIz9Num3.js";import"./useDescription-DPccdWs0.js";import"./inertValue-euBpb4uV.js";import"./useHighlightSelectionDescription-BRvSB1zI.js";import"./useUpdateEffect-B_CMR2Ja.js";import"./ListKeyboardDelegate-Bz-YKD5w.js";import"./useHasTabbableChild-nFA8ExFE.js";import"./Checkbox-DekdR4Ty.js";import"./check-L1rWu4pv.js";import"./useToggleState-wW4hLcpO.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
