import{r as m,f as l,j as t}from"./iframe-BANbOrjL.js";import{S as d}from"./SearchField-Dq395IVe.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DbjQPEu-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-54peqJ8a.js";import"./clsx-B-dksMZM.js";import"./Form-CNFyYQkx.js";import"./useFocusRing-DbV3xYYs.js";import"./index-DvmcBK1X.js";import"./index-C5-8epWM.js";import"./Input-trOtA2gB.js";import"./Hidden-B-0UQMnM.js";import"./Button-CFtjy4Ss.js";import"./useLabel-DaWSn-ZG.js";import"./useLabels-596GHSCS.js";import"./useButton-DJ76KY2c.js";import"./FieldError-Dz4Gx-Yr.js";import"./Text-1nbNgZtg.js";import"./clsx-Ciqy0D92.js";import"./Text-Ckl3Bse6.js";import"./RSPContexts-BniJiskW.js";import"./Group-bGKMXFQ3.js";import"./useControlledState-yh8y5GNM.js";import"./useLocalizedStringFormatter-CQ9MV6Yb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B5J2eHIq.js";import"./useField-BkzAvj6x.js";import"./TextField.module-DdivwlC8.js";import"./search-Cv2KrFIV.js";import"./createLucideIcon-mdFywCsT.js";import"./x-Bo7YhGfd.js";import"./useLocalizedStringFormatter-C_ZDKjDL.js";import"./Button-Dov5qDwf.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DT3xn_Oy.js";import"./Collection-zjfmvZA8.js";import"./index-BUHuSkUj.js";import"./DragAndDrop-R9s14ZXz.js";import"./getScrollParent-DmzKjg3u.js";import"./scrollIntoView-BwHcSgh9.js";import"./SelectionIndicator-CrTEERDH.js";import"./SelectionManager-xAct9blH.js";import"./useEvent-CZNt73ky.js";import"./useDescription-BXc5IFCt.js";import"./inertValue-BFyGmLwL.js";import"./useHighlightSelectionDescription-CJPCmo3O.js";import"./useUpdateEffect-LXS8-HCX.js";import"./ListKeyboardDelegate-DM397JfH.js";import"./useHasTabbableChild-D5Tfe-o3.js";import"./Checkbox-CVSlGfmj.js";import"./check-Du6uGpY8.js";import"./useToggleState-CL7AF3nT.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
