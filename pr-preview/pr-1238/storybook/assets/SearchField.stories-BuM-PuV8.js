import{r as m,f as l,j as t}from"./iframe-D83U9Jbw.js";import{S as d}from"./SearchField-BxvoKjYY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BOB-VzvP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C_gFKVIz.js";import"./clsx-B-dksMZM.js";import"./Form-BsAOBJ02.js";import"./useFocusRing-Dv4ce94Y.js";import"./index-WtMp4oUJ.js";import"./index-B1HH0YAv.js";import"./Input-BZzTz_QA.js";import"./Hidden-C0_hFnsL.js";import"./Button-u3kjlioi.js";import"./useLabel-Bzi_sPr8.js";import"./useLabels-DObCV9cv.js";import"./useButton-CLqFKr2I.js";import"./FieldError-D6NpRoO1.js";import"./Text-BuTxUZYo.js";import"./clsx-Ciqy0D92.js";import"./Text-CHHIfo1k.js";import"./RSPContexts-ChOs0gX9.js";import"./Group-BnP0WtNk.js";import"./useControlledState-DDqmXAM3.js";import"./useLocalizedStringFormatter-C9FHlYP_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B9BUlNYU.js";import"./useField-BLYC98Mc.js";import"./TextField.module-DdivwlC8.js";import"./search-CUMqrtMj.js";import"./createLucideIcon-c1bwsPcC.js";import"./x-BzoY_Db8.js";import"./useLocalizedStringFormatter-CPm18cyu.js";import"./Button-ayYEduOo.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DuKcmmSu.js";import"./Collection-HGZf4RXY.js";import"./index-BkqBqLPa.js";import"./DragAndDrop-CCW8xtX8.js";import"./getScrollParent-DQrxFRpX.js";import"./scrollIntoView-VfHWbuBY.js";import"./SelectionIndicator-Ci7z2GGd.js";import"./SelectionManager-BLkPK2O4.js";import"./useEvent-CpjHCQK_.js";import"./useDescription-CVN4gXFi.js";import"./inertValue-BhsaJZPP.js";import"./useHighlightSelectionDescription-DQL8ZMiZ.js";import"./useUpdateEffect-DbIcsTzQ.js";import"./ListKeyboardDelegate-Ch9tR-gt.js";import"./useHasTabbableChild-DaTpf1Kk.js";import"./Checkbox-DaiLH80a.js";import"./check-CPS-ATUL.js";import"./useToggleState-_Er2ldP8.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
