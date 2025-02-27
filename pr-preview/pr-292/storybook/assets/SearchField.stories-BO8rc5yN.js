import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{g as u}from"./utils-WlQYBfXa.js";import{r as m}from"./index-BbAIUH2N.js";import{S as f}from"./SearchField-DIhBK7JW.js";import{T as h,a as x,C as T,$ as g,R as S,b as k}from"./Table-oNz2ihBM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Form-Co3XUpyT.js";import"./useFocusable-DvoOiisW.js";import"./clsx-B-dksMZM.js";import"./Text-EJwwmz-7.js";import"./TextField.module-B2RiHuHW.js";import"./useControlledState-DGyHFLi9.js";import"./useField-RzOmeqWZ.js";import"./Hidden-C-pamdWU.js";import"./index-cpIEhwLo.js";import"./useLabels-CtxEn0bM.js";import"./Button-QmryGY2x.js";import"./Group-ceAKJ6e-.js";import"./useLocalizedStringFormatter-m925tTwS.js";import"./context-DFhOKXSg.js";import"./createLucideIcon-8wDOqnHv.js";import"./Button-DdyTjWLy.js";import"./x-Cu6J0Y2u.js";import"./RSPContexts-CeCCo7XS.js";import"./Collection-DXjGeaiG.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./SelectionManager-CrjNvHpx.js";import"./useEvent-CA0YFu_S.js";import"./FocusScope-BEpvNgc1.js";import"./useDescription-Ct3UQeSC.js";import"./VisuallyHidden-DXoeczHE.js";import"./ListKeyboardDelegate-Qpuh_B0q.js";import"./useHighlightSelectionDescription-BaTc4cjH.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-CFpHdRS1.js";import"./useGridSelectionCheckbox-RGIB2vH1.js";import"./Checkbox-krWbfwc9.js";const oe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},n={args:{},render:function(){const a=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[i,d]=m.useState(""),[c]=m.useState(()=>Array.from(u(10)).map((e,t)=>({id:t+1,fruit:e.name,description:"En frukt."}))),o=c.filter(e=>e.fruit.toLowerCase().includes(i.toLowerCase()));return r.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[r.jsx(f,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onInput:e=>d(e.target.value),style:{width:"100%"}}),i.length>0&&(o.length===0?r.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):r.jsx("div",{style:{marginTop:"20px"},children:r.jsxs(h,{"aria-label":"Fruit Table",style:{width:"100%"},children:[r.jsx(x,{children:a.map(e=>r.jsx(T,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),r.jsx(g,{children:o.map(e=>r.jsx(S,{children:a.map(t=>r.jsx(k,{children:e[t.id]},t.id))},e.id))})]})}))]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    const [mockData] = useState<DataRow[]>(() => Array.from(generateMockOptions(10)).map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: \`En frukt.\`
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onInput={e => setSearchTerm((e.target as HTMLInputElement).value)} style={{
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
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const me=["SimpleSearch"];export{n as SimpleSearch,me as __namedExportsOrder,oe as default};
